'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const core = require('../assets/js/core.js');
const sandbox = {window: {}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/data/database.js'), 'utf8'), sandbox);
const database = core.normalize(sandbox.window.RA2_DATA);
const base = {version: 'yr', sort: 'name', direction: 1, showHidden: true};
const query = fields => core.query(database.units, {...base, ...fields});
const ids = fields => query(fields).map(unit => unit.raw.ID);

test('full population, version separation and undefined definitions', () => {
  assert.equal(query({}).length, 559);
  assert.equal(query({version: 'ra2'}).length, 409);
  assert.equal(query({status: '注册但无定义'}).length, 6);
  assert.equal(query({version: 'ra2', status: '注册但无定义'}).length, 6);
  assert.equal(database.units.length, 968);
  assert.equal(database.combat.size, 558);
});
test('faction units without icons are opt-in while bases stay visible', () => {
  for (const version of ['ra2', 'yr']) {
    const visible = ids({version, showHidden: false});
    for (const id of ['HORV', 'CMON', 'XCOMET']) assert.ok(!visible.includes(id));
    for (const id of ['HARV', 'CMIN', 'AMCV', 'SMCV', 'GACNST', 'NACNST', 'COW']) assert.ok(visible.includes(id));
    assert.ok(ids({version, showHidden: true, search: 'HORV'}).includes('HORV'));
    assert.equal(ids({version, showHidden: false, search: 'HORV'}).length, 0);
  }
  for (const unit of database.units) {
    const factionUnit = unit.factions.some(f => ['allied', 'soviet', 'yuri'].includes(f));
    const protectedBase = ['AMCV', 'SMCV', 'PCV', 'GACNST', 'NACNST', 'YACNST', 'YAREFN'].includes(unit.raw.ID);
    if (unit.placeholder && factionUnit && !protectedBase) assert.equal(unit.hidden, true, unit.key);
    if (protectedBase) assert.equal(unit.hidden, false, unit.key);
    if (!unit.placeholder && !unit.attachment) assert.equal(unit.hidden, false, unit.key);
  }
  const visible = ids({showHidden: false});
  for (const id of ['SMON', 'SCHD', 'UTNK', 'WWLF', 'YADEPT']) assert.ok(!visible.includes(id));
  for (const id of ['YACNST', 'YAREFN', 'SMIN', 'SCHP', 'MUMY', 'LUNR']) assert.ok(visible.includes(id));
  assert.equal(ids({version: 'ra2', faction: 'soviet', type: 'ground', showHidden: false}).length, 9);
});
test('search handles names, IDs, whitespace, case and empty results', () => {
  for (const search of ['灰熊坦克', 'Grizzly', ' mtnk ']) assert.ok(ids({search}).includes('MTNK'));
  assert.equal(ids({search: '不存在的单位XYZ'}).length, 0);
});
test('spawned units inherit parent factions and require the hidden switch', () => {
  for (const version of ['ra2', 'yr']) {
    for (const [id, faction, parent] of [['V3ROCKET', 'soviet', 'V3'], ['DMISL', 'soviet', 'DRED'],
      ['HORNET', 'allied', 'CARRIER'], ['ASW', 'allied', 'DEST']]) {
      assert.ok(ids({version, faction, search: id}).includes(id));
      assert.ok(!ids({version, faction, search: id, showHidden: false}).includes(id));
      const unit = database.units.find(unit => unit.key === core.key(version, id));
      assert.ok(unit.attachment.parents.includes(parent));
    }
    for (const faction of version === 'yr' ? ['allied', 'soviet', 'yuri'] : ['allied', 'soviet']) {
      assert.ok(ids({version, faction, search: 'PDPLANE'}).includes('PDPLANE'));
    }
  }
  for (const [id, faction] of [['CMISL', 'yuri'], ['SLAV', 'yuri'], ['BPLN', 'soviet'], ['SPYP', 'soviet']]) {
    assert.ok(ids({faction, search: id}).includes(id));
    assert.ok(!ids({faction, search: id, showHidden: false}).includes(id));
  }
  assert.ok(!ids({faction: 'allied', search: 'BPLN'}).includes('BPLN'));
  assert.equal(database.units.length, 968);
});
test('multi-faction metadata and overlapping air and infantry types', () => {
  for (const faction of ['allied', 'soviet', 'yuri']) assert.ok(ids({search: 'CIVAN', faction}).includes('CIVAN'));
  for (const type of ['air', 'infantry']) {
    assert.ok(ids({search: 'JUMPJET', type}).includes('JUMPJET'));
    assert.ok(ids({search: 'LUNR', type}).includes('LUNR'));
  }
  assert.equal(ids({version: 'ra2', search: 'LUNR'}).length, 0);
});
test('null, zero, decimals and negative values retain their meaning', () => {
  assert.equal(core.number(''), null);
  assert.equal(core.number(' '), null);
  assert.equal(core.number('garbage'), null);
  assert.equal(core.number('0'), 0);
  assert.equal(core.number('-50'), -50);
  assert.equal(core.number('5.75'), 5.75);
  assert.ok(query({cost: 0}).length > 0);
  assert.ok(query({cost: 0}).every(unit => core.number(unit.raw.COST) !== null && Number(unit.raw.COST) <= 0));
  assert.ok(query({tech: 'negative'}).every(unit => Number(unit.raw.TECHLEVEL) < 0));
  assert.ok(query({tech: 'missing'}).every(unit => core.number(unit.raw.TECHLEVEL) === null));
});
test('combined filters and numeric sorting with missing values last', () => {
  const results = query({faction: 'allied', type: 'ground', cost: 1000, health: 100});
  assert.ok(results.length > 0);
  assert.ok(results.every(unit => unit.factions.includes('allied') && unit.types.includes('ground') &&
    core.number(unit.raw.COST) <= 1000 && core.number(unit.raw.STRENGTH) >= 100));
  for (const direction of [-1, 1]) {
    const sorted = query({sort: 'COST', direction});
    let missing = false;
    let previous = null;
    for (const unit of sorted) {
      const value = core.number(unit.raw.COST);
      if (value === null) missing = true;
      else {
        assert.equal(missing, false);
        if (previous !== null) assert.ok((value - previous) * direction >= 0);
        previous = value;
      }
    }
    assert.deepEqual(sorted.map(unit => unit.key), query({sort: 'COST', direction}).map(unit => unit.key));
  }
});
test('versioned weapons, same-name unit and warhead, numbered weapons and bounds', () => {
  assert.ok(database.units.find(unit => unit.key === 'yr:VIRUS'));
  assert.ok(database.combat.has('yr:弹头:VIRUS'));
  for (const version of ['ra2', 'yr']) {
    assert.equal(database.combat.get(core.key(version, '武器:RedEye2')).DAMAGE, '75');
    const unit = database.units.find(item => item.key === core.key(version, 'CIVAN'));
    assert.equal(unit.raw.COST, version === 'ra2' ? '1000' : '1750');
  }
  const fv = database.units.find(unit => unit.key === 'yr:FV');
  assert.ok(core.weaponReferences(fv.raw).some(([field]) => field === 'WEAPON17'));
  assert.ok(core.bounds(database.units, 'yr', 'STRENGTH') > 1500);
});

