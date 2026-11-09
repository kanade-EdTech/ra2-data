/* Shared query logic. Runs in browsers and in the Node validation suite. */
(function (root) {
  'use strict';
  const labels = {
    factions: {allied: '盟军', soviet: '苏军', yuri: '尤里', neutral: '中立', unknown: '未分类'},
    types: {infantry: '步兵', ground: '地面载具', air: '空中单位', naval: '海军', building: '建筑', unknown: '未分类'},
    stages: {basic: '基础', radar: '雷达后', lab: '作战实验室后', spy: '间谍科技'},
    versions: {ra2: '红警2原版', yr: '尤里的复仇'}
  };
  const metadataFields = new Set(['版本', '类别', 'ID', '名称', '规则来源', '定义状态']);
  const referenceRoles = {PROJECTILE: '弹体', WARHEAD: '弹头', SHRAPNELWEAPON: '武器', AIRBURSTWEAPON: '武器'};
  const weaponPattern = /^(PRIMARY|SECONDARY|ELITEPRIMARY|ELITESECONDARY|WEAPON\d+|ELITEWEAPON\d+|OCCUPYWEAPON|ELITEOCCUPYWEAPON|DEATHWEAPON)$/;
  const visibleBases = new Set(['AMCV', 'SMCV', 'PCV', 'GACNST', 'NACNST', 'YACNST', 'YAREFN']);
  // Keep links for known variants when showing their details.
  const hiddenVariants = {
    HORV: 'HARV', CMON: 'CMIN', SMON: 'CMIN', SCHD: 'SCHP',
    XCOMET: 'HTNK', UTNK: 'HTNK', WWLF: 'MUMY', YADEPT: 'GADEPT'
  };

  function key(version, id) {
    return version + ':' + String(id).toUpperCase();
  }
  function number(value) {
    if (value == null || String(value).trim() === '') return null;
    const result = Number(value);
    return Number.isFinite(result) ? result : null;
  }
  function parameters(record) {
    return Object.entries(record).filter(([field, value]) => !metadataFields.has(field) && value !== '');
  }
  function weaponReferences(record) {
    return Object.entries(record).filter(([field, value]) => value && weaponPattern.test(field));
  }
  function normalize(payload) {
    const catalog = new Map(payload.catalog.map(item => [key(item.version, item.gameId), item]));
    const images = new Map(payload.images.map(item => [key(item.version, item.gameId), item]));
    const combat = new Map(payload.weapons.map(item => [key(item['版本'], item['类别'] + ':' + item.ID), item]));
    const attachments = new Map();
    for (const parent of payload.units) {
      const parentKey = key(parent['版本'], parent.ID);
      const parentFactions = (images.get(parentKey) || catalog.get(parentKey) || {}).factions || [];
      const factions = parentFactions.filter(value => ['allied', 'soviet', 'yuri'].includes(value));
      for (const field of ['SPAWNS', 'ENSLAVES', 'AIRSTRIKETEAMTYPE', 'ELITEAIRSTRIKETEAMTYPE']) {
        if (!parent[field]) continue;
        const childKey = key(parent['版本'], parent[field]);
        const attachment = attachments.get(childKey) || {factions: [], parents: []};
        attachment.factions = [...new Set([...attachment.factions, ...factions])];
        attachment.parents = [...new Set([...attachment.parents, parent.ID])];
        attachments.set(childKey, attachment);
      }
    }
    // Support aircraft are invoked by abilities rather than a unit's Spawns key.
    for (const version of ['ra2', 'yr']) {
      attachments.set(key(version, 'PDPLANE'), {
        factions: version === 'yr' ? ['allied', 'soviet', 'yuri'] : ['allied', 'soviet'],
        parents: [], source: '伞兵空投支援'
      });
    }
    attachments.set(key('yr', 'SPYP'), {factions: ['soviet'], parents: [], source: '苏军侦察机支援'});
    const units = payload.units.map(raw => {
      const recordKey = key(raw['版本'], raw.ID);
      const metadata = catalog.get(recordKey) || {};
      const image = images.get(recordKey) || {};
      const attachmentRecord = attachments.get(recordKey);
      const attachment = attachmentRecord?.factions.length ? attachmentRecord : undefined;
      const types = new Set(image.categories || metadata.categories || []);
      if (raw['类别'] === '步兵') types.add('infantry');
      if (raw['类别'] === '飞机' || /^(yes|true|1)$/i.test(raw.JUMPJET)) types.add('air');
      if (raw['类别'] === '建筑') types.add('building');
      if (raw['类别'] === '车辆及舰船' && !types.has('ground') && !types.has('naval') && !types.has('air')) {
        types.add(/^(yes|true|1)$/i.test(raw.NAVAL) ? 'naval' : 'ground');
      }
      const displayTypes = [...types].filter(type => Object.hasOwn(labels.types, type));
      if (!displayTypes.length) displayTypes.push('unknown');
      const factions = attachment ? attachment.factions : image.factions || metadata.factions || [];
      const faction = attachment ? factions[0] : image.faction || metadata.faction || factions[0] || 'unknown';
      const fallback = 'ra2-conghangdaola-mainboard/images/assets/factions/' +
        (['allied', 'soviet', 'yuri'].includes(faction) ? faction : 'neutral') + '.png';
      const placeholder = !image.exportImage || image.exportImage.includes('/factions/');
      const belongsToFaction = factions.some(value => ['allied', 'soviet', 'yuri'].includes(value));
      const hidden = Boolean(attachment) ||
        (placeholder && !visibleBases.has(raw.ID) && (belongsToFaction || Boolean(hiddenVariants[raw.ID])));
      return {
        key: recordKey, raw, metadata, image, types: displayTypes, factions, faction, fallback,
        name: image.name || metadata.name || raw['名称'] || raw.NAME || raw.ID,
        icon: image.exportImage ? 'ra2-conghangdaola-mainboard/' + image.exportImage : fallback,
        placeholder,
        hidden,
        attachment,
        hiddenVariant: placeholder ? hiddenVariants[raw.ID] || '' : '',
        stage: image.techStage || metadata.techStage || '',
        defined: raw['定义状态'] === '已定义'
      };
    });
    return {units, combat, verifications: payload.verifications || {}};
  }
  function matches(unit, state) {
    const raw = unit.raw;
    if (raw['版本'] !== state.version) return false;
    if (unit.hidden && !state.showHidden) return false;
    const search = (state.search || '').trim().toLowerCase();
    if (search && ![unit.name, raw.NAME, raw.ID].some(value => String(value || '').toLowerCase().includes(search))) return false;
    if (state.faction === 'unknown' && unit.factions.length) return false;
    if (state.faction && state.faction !== 'unknown' && !unit.factions.includes(state.faction)) return false;
    if (state.type && !unit.types.includes(state.type)) return false;
    for (const [field, limit, direction] of [['COST', state.cost, 'max'], ['STRENGTH', state.health, 'min']]) {
      const value = number(raw[field]);
      if (limit != null && (value == null || (direction === 'max' ? value > limit : value < limit))) return false;
    }
    const tech = number(raw.TECHLEVEL);
    if (state.tech === 'missing' && tech !== null) return false;
    if (state.tech === 'negative' && !(tech !== null && tech < 0)) return false;
    if (state.tech === '4+' && !(tech !== null && tech >= 4)) return false;
    if (state.tech && !['missing', 'negative', '4+'].includes(state.tech) && tech !== Number(state.tech)) return false;
    return !state.status || raw['定义状态'] === state.status;
  }
  function compareUnits(a, b, field, direction) {
    const tie = () => a.name.localeCompare(b.name, 'zh-CN') || a.raw.ID.localeCompare(b.raw.ID);
    if (field === 'name') return direction * a.name.localeCompare(b.name, 'zh-CN') || a.raw.ID.localeCompare(b.raw.ID);
    const left = number(a.raw[field]);
    const right = number(b.raw[field]);
    if (left === null) return right === null ? tie() : 1;
    if (right === null) return -1;
    return (left - right) * direction || tie();
  }
  function query(units, state) {
    return units.filter(unit => matches(unit, state)).sort((a, b) =>
      compareUnits(a, b, state.sort || 'name', state.direction || 1));
  }
  function bounds(units, version, field) {
    const values = units.filter(unit => unit.raw['版本'] === version)
      .map(unit => number(unit.raw[field])).filter(value => value !== null);
    return Math.max(1, ...values);
  }
  const api = {labels, referenceRoles, key, number, parameters, weaponReferences, normalize, matches, compareUnits, query, bounds};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RA2Core = api;
})(typeof window === 'undefined' ? globalThis : window);

