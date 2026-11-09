"""Read game archives independently and audit exported data without changing it.

Keeps exact section names, source line numbers and duplicate assignments. The
legacy uppercase-section interpretation is checked separately, never assumed to
be the game's INI semantics. Uses only the standard library and local OpenSSL.
"""
import argparse
import csv
import hashlib
import json
import re
import zipfile
from collections import Counter, defaultdict, deque
from datetime import datetime, timezone
from pathlib import Path

from mix_reader import Mix, mix_hash

ROOT = Path(__file__).resolve().parents[1]
META = {'版本', '类别', 'ID', '名称', '规则来源', '定义状态'}
REGISTRIES = {'InfantryTypes': '步兵', 'VehicleTypes': '车辆及舰船',
              'AircraftTypes': '飞机', 'BuildingTypes': '建筑'}
WEAPON = re.compile(r'^(PRIMARY|SECONDARY|ELITEPRIMARY|ELITESECONDARY|WEAPON\d+|ELITEWEAPON\d+|OCCUPYWEAPON|ELITEOCCUPYWEAPON|DEATHWEAPON)$')
REFS = {'PROJECTILE': '弹体', 'WARHEAD': '弹头', 'SHRAPNELWEAPON': '武器', 'AIRBURSTWEAPON': '武器'}


def digest(data):
    return hashlib.sha256(data).hexdigest()


def parse(data):
    sections, folded, locations, duplicates, headers = {}, {}, {}, [], defaultdict(list)
    current = None
    for line_no, text in enumerate(data.decode('latin1').splitlines(), 1):
        text = text.partition(';')[0].strip()
        match = re.match(r'^\[([^]]+)\]', text)
        if match:
            current = match[1]
            headers[current].append(line_no)
            sections.setdefault(current, {})
            folded.setdefault(current.upper(), {})
        elif current is not None and '=' in text:
            key, value = text.split('=', 1)
            key, value = key.strip().upper(), value.strip()
            if key in sections[current]:
                duplicates.append({'section': current, 'field': key, 'previous': sections[current][key],
                                   'value': value, 'line': line_no, 'previousLine': locations[current, key]})
            sections[current][key] = value
            folded[current.upper()][key] = value
            locations[current, key] = line_no
    return {'sections': sections, 'folded': folded, 'locations': locations,
            'duplicates': duplicates, 'headers': dict(headers)}


def rows(name):
    with (ROOT / 'data' / name).open(encoding='utf-8-sig', newline='') as stream:
        return list(csv.DictReader(stream))


def load_json(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


def compare_fields(record, expected, version, role, section, locations):
    actual = {k: v for k, v in record.items() if k not in META and v != ''}
    expected = {k: v for k, v in expected.items() if v != ''}
    result = []
    for field in sorted(actual.keys() | expected.keys()):
        if actual.get(field) != expected.get(field):
            result.append({'version': version, 'role': role, 'id': record['ID'], 'sourceSection': section,
                           'field': field, 'database': actual.get(field), 'source': expected.get(field),
                           'sourceLine': locations.get((section, field))})
    return result


def parse_markdown(path, combat=False):
    entries, overview, current, in_overview = {}, {}, None, False
    for line in path.read_text(encoding='utf-8-sig').splitlines():
        if line == '## 总览':
            in_overview = True
        elif line == '## 完整参数':
            in_overview = False
        elif line.startswith('### '):
            parts = line[4:].split(' / ')
            current = tuple(parts[:2])
            entries[current] = {}
        elif line.startswith('| '):
            cells = [x.strip(' \t').replace('&#124;', '|').replace('<br>', '\n') for x in line.strip('|').split('|')]
            if in_overview and cells[0] in ('ra2', 'yr'):
                key = tuple(cells[:3]) if combat else (cells[0], cells[2])
                overview[key] = cells
            elif current and len(cells) == 2 and cells[0] not in ('参数', '---'):
                entries[current][cells[0]] = cells[1]
    return entries, overview


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--game-dir', type=Path, default=ROOT.parent)
    ap.add_argument('--output', type=Path, default=ROOT / 'data/game-audit')
    args = ap.parse_args()
    game, out = args.game_dir.resolve(), args.output.resolve()
    out.mkdir(parents=True, exist_ok=True)
    (out / 'sources').mkdir(exist_ok=True)
    report = {'generatedAt': datetime.now(timezone.utc).isoformat(), 'gameDirectory': str(game),
              'projectDirectory': str(ROOT), 'sources': [], 'archiveCandidates': [], 'looseOverrides': [],
              'counts': {}, 'registryDifferences': [], 'legacyFieldDifferences': [], 'exactSectionDifferences': [],
              'caseCollisions': [], 'duplicateAssignments': [], 'duplicateRegistrations': [],
              'unresolvedReferences': [], 'missingCombatRecords': [], 'extraCombatRecords': [],
              'metadataDifferences': [], 'markdownDifferences': [], 'verificationDifferences': [],
              'specialReferences': [], 'bundleChecks': {}}
    report['explicitEmptyFields'] = []
    report['globalCombatReferences'] = []
    report['contextRules'] = {}
    # Enumerate all root MIX files, including expansion archives, for relevant
    # direct rules and known local archives. No archive is written to.
    candidates, maps = {}, []
    map_names = {mix_hash(f'{side}{n:02d}{suffix}.map'): f'{side}{n:02d}{suffix}.map'
                 for side in ('all', 'sov', 'trn') for n in range(1, 13)
                 for suffix in ('t', 's', 'u', 'l', 'd', 'tmd', 'smd', 'umd', 'lmd', 'dmd')}
    for path in game.iterdir():
        for suffix in ('.map', '.mpr'):
            map_names[mix_hash(path.stem + suffix)] = path.stem + suffix
    def collect_map(data, source):
        if b'\x00' not in data[:8192] and b'[Basic]' in data and b'[Map]' in data:
            maps.append((source, data))
    def collect_archive_maps(node, parent):
        for position, size in node.entries.values():
            if size < 100_000:
                data = bytes(node.data[position:position + size])
                if b'[MultiMaps]' in data:
                    for name in parse(data)['folded'].get('MULTIMAPS', {}).values():
                        map_names[mix_hash(name + '.map')] = name + '.map'
        for key, (position, size) in node.entries.items():
            if size < 1024 or size > 10_000_000:
                continue
            head = bytes(node.data[position:position + min(size, 8192)])
            if b'[Basic]' in head or b'[Map]' in head or b'[Header]' in head:
                collect_map(bytes(node.data[position:position + size]), parent + '/' + map_names.get(key, f'@{key:08X}'))
    for path in sorted(game.glob('*')):
        if not path.is_file():
            continue
        if path.name.lower() in ('rules.ini', 'rulesmd.ini', 'art.ini', 'artmd.ini'):
            report['looseOverrides'].append({'file': path.name, 'sha256': digest(path.read_bytes())})
        if path.suffix.lower() in ('.map', '.mpr', '.mmx', '.yro'):
            data = path.read_bytes()
            if b'\x00' in data[:128]:
                collect_archive_maps(Mix(data, path.name), path.name)
            else:
                collect_map(data, path.name)
        if path.suffix.lower() != '.mix':
            continue
        archive = Mix.open(path)
        archives = [(path.name, archive)]
        for child in ('local.mix', 'localmd.mix'):
            data = archive.get(child)
            if data is not None:
                archives.append((path.name + '/' + child, Mix(data, path.name + '/' + child)))
        for parent, node in archives:
            collect_archive_maps(node, parent)
            for name in ('rules.ini', 'rulesmd.ini', 'art.ini', 'artmd.ini'):
                data = node.get(name)
                if data is not None:
                    source = parent + '/' + name
                    candidates[source.lower()] = data
                    report['archiveCandidates'].append({'source': source, 'bytes': len(data), 'sha256': digest(data)})
    chosen = {'ra2': 'ra2.mix/local.mix/rules.ini', 'yr': 'expandmd01.mix/rulesmd.ini'}
    parsed = {}
    for version, source in chosen.items():
        data = candidates[source]
        (out / 'sources' / (version + '-rules.ini')).write_bytes(data)
        parsed[version] = parse(data)
        report['sources'].append({'version': version, 'source': source, 'sha256': digest(data), 'bytes': len(data)})
    report['patchChanges'] = []
    yr_base = parse(candidates['ra2md.mix/localmd.mix/rulesmd.ini'])['sections']
    yr_patch = parsed['yr']['sections']
    for section in sorted(yr_base.keys() | yr_patch.keys()):
        before, after = yr_base.get(section, {}), yr_patch.get(section, {})
        for field in sorted(before.keys() | after.keys()):
            if before.get(field) != after.get(field):
                report['patchChanges'].append({'section': section, 'field': field,
                                               'base': before.get(field), 'patch': after.get(field)})
    units, combat = rows('all-unit-stats.csv'), rows('all-unit-weapons.csv')
    report['duplicateBusinessKeys'] = []
    report['countryRestrictions'] = [{'version': r['版本'], 'id': r['ID'], 'name': r['名称'],
        'owner': r.get('OWNER'), 'requiredHouses': r.get('REQUIREDHOUSES'), 'forbiddenHouses': r.get('FORBIDDENHOUSES')}
        for r in units if r.get('REQUIREDHOUSES') or r.get('FORBIDDENHOUSES')]
    for group, data, fields in [('units', units, ('版本', 'ID')), ('combat', combat, ('版本', '类别', 'ID'))]:
        keys = Counter(tuple(row[f] for f in fields) for row in data)
        report['duplicateBusinessKeys'] += [{'group': group, 'key': key, 'count': n} for key, n in keys.items() if n > 1]
    payload_text = (ROOT / 'assets/data/database.js').read_text(encoding='utf-8-sig')
    payload = json.loads(payload_text.removeprefix('window.RA2_DATA = ').strip().removesuffix(';'))
    expected_payload = {'units': units, 'weapons': combat,
                        'catalog': load_json(ROOT / 'data/runtime-unit-catalog.json'),
                        'images': load_json(ROOT / 'ra2-conghangdaola-mainboard/manifest.json')['items'],
                        'verifications': load_json(ROOT / 'data/chrono-ivan-verification.json')}
    report['bundleChecks']['current'] = {k: payload.get(k) == v for k, v in expected_payload.items()}
    release_path = ROOT / 'release/ra2-data-preview/assets/data/database.js'
    if release_path.exists():
        release = json.loads(release_path.read_text(encoding='utf-8-sig').removeprefix('window.RA2_DATA = ').strip().removesuffix(';'))
        report['bundleChecks']['releaseEqualsCurrent'] = release == payload
    archive_path = ROOT / 'release/ra2-data-preview.zip'
    if archive_path.exists():
        with zipfile.ZipFile(archive_path) as archive:
            packed = json.loads(archive.read('assets/data/database.js').decode('utf-8-sig')
                                .removeprefix('window.RA2_DATA = ').strip().removesuffix(';'))
        report['bundleChecks']['zipEqualsCurrent'] = packed == payload
        report['bundleChecks']['zipSha256'] = digest(archive_path.read_bytes())
    for version, doc in parsed.items():
        sections, folded, loc = doc['sections'], doc['folded'], doc['locations']
        registry = {}
        for reg, role in REGISTRIES.items():
            for index, name in sections[reg].items():
                if name.upper() in registry:
                    report['duplicateRegistrations'].append({'version': version, 'registry': reg, 'index': index, 'id': name})
                registry[name.upper()] = (role, name)
        actual_units = {r['ID']: r for r in units if r['版本'] == version}
        actual_combat = {(r['类别'], r['ID']): r for r in combat if r['版本'] == version}
        report['contextRules'][version] = {name: sections[name] for name in
            ('General', 'CombatDamage', 'Radiation', 'Easy', 'Normal', 'Difficult',
             'British', 'French', 'Germans', 'Americans', 'Alliance',
             'Russians', 'Confederation', 'Africans', 'Arabs', 'YuriCountry') if name in sections}
        for section in ('General', 'CombatDamage', 'Radiation'):
            for field, value in sections.get(section, {}).items():
                if 'WARHEAD' in field or field == 'DEATHWEAPON':
                    role = '武器' if field == 'DEATHWEAPON' else '弹头'
                    report['globalCombatReferences'].append({'version': version, 'section': section,
                        'field': field, 'target': value, 'role': role, 'definedInRules': value.upper() in folded,
                        'includedInCombatCSV': (role, value.upper()) in actual_combat,
                        'sourceLine': loc.get((section, field))})
        for name in sorted(registry.keys() | actual_units.keys()):
            expected = registry.get(name)
            actual = actual_units.get(name)
            if expected is None or actual is None or expected[0] != actual['类别']:
                report['registryDifferences'].append({'version': version, 'id': name, 'expected': expected,
                                                     'database': actual and actual['类别']})
        field_count = 0
        for row in list(actual_units.values()) + list(actual_combat.values()):
            name, role = row['ID'], row['类别']
            field_count += len(folded.get(name, {}))
            report['legacyFieldDifferences'] += compare_fields(row, folded.get(name, {}), version, role, name, loc)
            for field, value in folded.get(name, {}).items():
                if value == '':
                    report['explicitEmptyFields'].append({'version': version, 'role': role, 'id': name,
                                                         'field': field, 'database': row.get(field)})
            expected_status = '已定义' if folded.get(name) else '注册但无定义'
            if row.get('定义状态', expected_status) != expected_status:
                report['registryDifferences'].append({'version': version, 'id': name, 'status': row.get('定义状态'), 'expectedStatus': expected_status})
        # Recover original case through registries and the reference graph.
        queue = deque()
        for unit_id, (role, name) in registry.items():
            section = sections.get(name)
            if section is None:
                matching = [s for s in sections if s.upper() == name.upper()]
                section = sections[matching[0]] if len(matching) == 1 else {}
                name = matching[0] if len(matching) == 1 else name
            if unit_id in actual_units:
                report['exactSectionDifferences'] += compare_fields(actual_units[unit_id], section, version, role, name, loc)
            for field, value in section.items():
                if WEAPON.fullmatch(field):
                    queue.append(('武器', value, name, field))
                if any(x in field for x in ('SPAWN', 'WEAPON', 'WARHEAD')) or field in ('DEPLOYSINTO', 'UNDEPLOYSINTO', 'POWEREDUNIT'):
                    report['specialReferences'].append({'version': version, 'section': name, 'field': field, 'value': value, 'line': loc.get((name, field))})
        seen = set()
        while queue:
            role, name, parent, field = queue.popleft()
            key = (role, name.upper())
            if key in seen:
                continue
            seen.add(key)
            target = sections.get(name)
            if target is None:
                matching = [s for s in sections if s.upper() == name.upper()]
                target = sections[matching[0]] if len(matching) == 1 else None
                name = matching[0] if len(matching) == 1 else name
            if target is None:
                report['unresolvedReferences'].append({'version': version, 'role': role, 'id': name,
                                                       'fromSection': parent, 'fromField': field})
                continue
            row = actual_combat.get(key)
            if row is None:
                report['missingCombatRecords'].append({'version': version, 'role': role, 'id': name,
                                                       'fromSection': parent, 'fromField': field})
            else:
                report['exactSectionDifferences'] += compare_fields(row, target, version, role, name, loc)
            for ref, target_role in REFS.items():
                if target.get(ref):
                    queue.append((target_role, target[ref], name, ref))
        report['extraCombatRecords'] += [{'version': version, 'role': role, 'id': name}
                                         for role, name in sorted(actual_combat.keys() - seen)]
        for name in folded:
            originals = [s for s in sections if s.upper() == name]
            if len(originals) > 1:
                report['caseCollisions'].append({'version': version, 'normalizedId': name,
                                                'sections': {s: {'lines': doc['headers'][s], 'fields': sections[s]} for s in originals}})
        report['duplicateAssignments'] += [dict(version=version, **d) for d in doc['duplicates']]
        report['counts'][version] = {'units': len(actual_units), 'combatRecords': len(actual_combat),
                                     'sourceExplicitFieldsCompared': field_count, 'registeredUniqueIds': len(registry),
                                     'undefinedIds': [name for name in registry if not folded.get(name)],
                                     'unitCategories': dict(Counter(x['类别'] for x in actual_units.values())),
                                     'combatCategories': dict(Counter(x['类别'] for x in actual_combat.values()))}
    for filename, data, is_combat in [('all-unit-stats.md', units, False), ('all-unit-weapons.md', combat, True)]:
        details, overview = parse_markdown(ROOT / 'data' / filename, is_combat)
        for row in data:
            key = (row['版本'], row['ID'])
            overview_key = (row['版本'], row['类别'], row['ID']) if is_combat else key
            expected = {k: v for k, v in row.items() if k not in META and v != ''}
            md_nonempty = {k: v for k, v in details.get(key, {}).items() if v != ''}
            # Undefined records use a prose notice, not a detail table.
            if md_nonempty != expected:
                report['markdownDifferences'].append({'file': filename, 'key': key, 'kind': 'detail',
                    'fields': [{'field': k, 'csv': expected.get(k), 'markdown': details.get(key, {}).get(k)}
                               for k in sorted(expected.keys() | details.get(key, {}).keys())
                               if expected.get(k, '') != details.get(key, {}).get(k, '')]})
            fields = ['版本', '类别', 'ID', '名称'] + (['DAMAGE', 'ROF', 'RANGE', 'SPEED', 'PROJECTILE', 'WARHEAD'] if is_combat
                                                       else ['STRENGTH', 'ARMOR', 'COST', 'SPEED', 'SIGHT', 'POWER', 'PRIMARY'])
            if overview.get(overview_key) != [row.get(f, '') for f in fields]:
                report['markdownDifferences'].append({'file': filename, 'key': key, 'kind': 'overview',
                                                       'csv': [row.get(f, '') for f in fields], 'markdown': overview.get(overview_key)})
    for group in ('catalog', 'images'):
        for row in payload[group]:
            version, name = row['version'], row['gameId'].upper()
            source = parsed[version]['folded'].get(name, {})
            if 'techLevelRaw' in row and str(row['techLevelRaw']) != source.get('TECHLEVEL'):
                report['metadataDifferences'].append({'group': group, 'version': version, 'id': name,
                    'field': 'techLevelRaw', 'database': row['techLevelRaw'], 'source': source.get('TECHLEVEL')})
            owners = {h.strip().upper() for h in source.get('OWNER', '').split(',') if h.strip()}
            required = {h.strip().upper() for h in source.get('REQUIREDHOUSES', '').split(',') if h.strip()}
            forbidden = {h.strip().upper() for h in source.get('FORBIDDENHOUSES', '').split(',') if h.strip()}
            for house in row.get('countries', []):
                if (owners and house.upper() not in owners) or (required and house.upper() not in required) or house.upper() in forbidden:
                    report['metadataDifferences'].append({'group': group, 'version': version, 'id': name,
                        'field': 'countries', 'database': house, 'source': {k: source.get(k) for k in ('OWNER', 'REQUIREDHOUSES', 'FORBIDDENHOUSES')}})
    for version, name in [('ra2', 'ra2'), ('yr', 'yr-patch')]:
        proof = payload['verifications'][name]
        for section, value in proof.items():
            if not isinstance(value, dict):
                continue
            source = parsed[version]['folded'].get(section.upper(), {})
            for field, recorded in value.items():
                if source.get(field) != recorded:
                    report['verificationDifferences'].append({'version': version, 'section': section, 'field': field,
                                                               'database': recorded, 'source': source.get(field)})
        if proof['rulesSha256'] != next(x['sha256'] for x in report['sources'] if x['version'] == version):
            report['verificationDifferences'].append({'version': version, 'field': 'rulesSha256'})
    report['maps'] = []
    combat_sections = {v: {r['ID'] for r in combat if r['版本'] == v} for v in parsed}
    unit_sections = {v: {r['ID'] for r in units if r['版本'] == v} for v in parsed}
    for source, data in maps:
        doc = parse(data)
        # Original campaign maps use the original rules; original multiplayer
        # maps may also be played in YR, so both baselines are reported.
        lower = source.lower()
        if 'md' in lower or '.yro' in lower:
            versions = ['yr']
        elif lower.startswith(('maps01.mix/', 'maps02.mix/')):
            versions = ['ra2']
        else:
            versions = ['ra2', 'yr']
        changes = []
        for version in versions:
            for section, values in doc['sections'].items():
                if section.upper() not in unit_sections[version] | combat_sections[version]:
                    continue
                baseline = parsed[version]['sections'].get(section, parsed[version]['folded'].get(section.upper(), {}))
                for field, value in values.items():
                    if value != baseline.get(field):
                        changes.append({'version': version, 'section': section, 'field': field,
                                        'baseRules': baseline.get(field), 'map': value,
                                        'sourceLine': doc['locations'].get((section, field))})
        item = {'source': source, 'sha256': digest(data), 'name': doc['folded'].get('BASIC', {}).get('NAME'),
                'comparedVersions': versions, 'differences': changes}
        report['maps'].append(item)
        if changes:
            (out / 'sources' / ('map-' + digest(source.encode())[:12] + '.ini')).write_bytes(data)
            item['snapshot'] = 'sources/map-' + digest(source.encode())[:12] + '.ini'
    (out / 'audit.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    # Flat files make every finding reviewable without a JSON viewer.
    for filename, records, fields in [
        ('section-contamination.csv', report['exactSectionDifferences'], ['version', 'role', 'id', 'sourceSection', 'field', 'database', 'source', 'sourceLine']),
        ('explicit-empty-fields.csv', report['explicitEmptyFields'], ['version', 'role', 'id', 'field', 'database']),
        ('country-restrictions.csv', report['countryRestrictions'], ['version', 'id', 'name', 'owner', 'requiredHouses', 'forbiddenHouses']),
        ('patch-differences.csv', report['patchChanges'], ['section', 'field', 'base', 'patch']),
        ('global-combat-references.csv', report['globalCombatReferences'], ['version', 'section', 'field', 'target', 'role', 'definedInRules', 'includedInCombatCSV', 'sourceLine']),
        ('map-overrides.csv', [dict(mapSource=item['source'], snapshot=item.get('snapshot'), **change)
                               for item in report['maps'] for change in item['differences']],
            ['mapSource', 'version', 'section', 'field', 'baseRules', 'map', 'sourceLine', 'snapshot'])]:
        with (out / filename).open('w', encoding='utf-8-sig', newline='') as stream:
            writer = csv.DictWriter(stream, fieldnames=fields)
            writer.writeheader()
            writer.writerows(records)
    print(json.dumps({k: v if k in ('counts', 'sources', 'bundleChecks', 'archiveCandidates', 'looseOverrides') else len(v)
                      for k, v in report.items() if isinstance(v, (list, dict))}, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
