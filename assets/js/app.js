(function () {
  'use strict';
  const byId = id => document.getElementById(id);
  const filterIds = ['faction', 'type', 'cost', 'health', 'tech', 'status', 'sort', 'direction'];
  const pageSize = 48;
  const preferencesKey = 'ra2-data.preferences.v1';
  let database;
  let page = 0;
  let selectedId = null;
  let visible = [];
  const core = window.RA2Core;

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function button(text, action, className) {
    const node = element('button', text, className);
    node.type = 'button';
    node.addEventListener('click', action);
    return node;
  }
  function display(value, missing) {
    return value === '' || value == null ? missing : String(value);
  }
  function table(rows, missing = '未显式配置') {
    const list = element('dl');
    for (const [name, value] of rows) {
      list.append(element('dt', name), element('dd', display(value, missing)));
    }
    return list;
  }
  function imageFor(unit, lazy) {
    const image = element('img', undefined, 'unit-image');
    image.width = 120;
    image.height = lazy ? 90 : 150;
    image.alt = unit.name + (unit.placeholder ? '（阵营标志）' : '');
    image.loading = lazy ? 'lazy' : 'eager';
    image.addEventListener('error', () => {
      image.src = unit.fallback;
      image.alt = unit.name + '（阵营标志）';
      image.after(element('small', '图片加载失败，使用阵营标志', 'muted image-caption'));
    }, {once: true});
    image.src = unit.icon;
    return image;
  }
  function state() {
    return {
      version: byId('version').value,
      showHidden: byId('show-hidden').checked,
      search: byId('search').value,
      faction: byId('faction').value,
      type: byId('type').value,
      cost: core.number(byId('cost').value),
      health: core.number(byId('health').value),
      tech: byId('tech').value,
      status: byId('status').value,
      sort: byId('sort').value,
      direction: Number(byId('direction').value)
    };
  }
  function savePreferences() {
    try {
      localStorage.setItem(preferencesKey, JSON.stringify({
        ...state(), page, selectedId, filtersOpen: document.querySelector('.filters').open
      }));
    } catch (error) {
      // Browsers may disable storage or exhaust its quota. Queries still work.
    }
  }
  function restorePreferences() {
    let saved;
    try {
      saved = JSON.parse(localStorage.getItem(preferencesKey));
    } catch (error) {
      return null;
    }
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return null;
    for (const id of ['version', 'faction', 'type', 'tech', 'status', 'sort', 'direction']) {
      const input = byId(id);
      if (saved[id] != null && [...input.options].some(option => option.value === String(saved[id]))) {
        input.value = String(saved[id]);
      }
    }
    for (const id of ['cost', 'health']) {
      if (typeof saved[id] === 'number' && Number.isFinite(saved[id]) && saved[id] >= 0) {
        byId(id).value = String(saved[id]);
      }
    }
    if (typeof saved.search === 'string') byId('search').value = saved.search;
    if (typeof saved.showHidden === 'boolean') byId('show-hidden').checked = saved.showHidden;
    if (Number.isSafeInteger(saved.page) && saved.page >= 0) page = saved.page;
    if (typeof saved.selectedId === 'string') selectedId = saved.selectedId;
    return saved;
  }
  function synchronizeRanges() {
    for (const [name, field] of [['cost', 'COST'], ['health', 'STRENGTH']]) {
      const input = byId(name);
      const range = byId(name + '-range');
      range.max = String(core.bounds(database.units, byId('version').value, field));
      range.value = input.value || (name === 'cost' ? range.max : '0');
      range.setAttribute('aria-valuetext', input.value === '' ? '不限' : input.value);
    }
  }
  function resetFilters(clearSearch) {
    byId('show-hidden').checked = false;
    if (clearSearch) byId('search').value = '';
    for (const id of filterIds) {
      const input = byId(id);
      if (input.tagName === 'SELECT') input.selectedIndex = 0;
      else input.value = '';
    }
    page = 0;
    synchronizeRanges();
    render();
  }
  function renderCard(unit) {
    const card = button('', () => {
      selectedId = unit.raw.ID;
      render();
      const selectedCard = byId('grid').querySelector('[aria-pressed="true"]');
      selectedCard?.focus();
      if (window.matchMedia('(max-width: 768px)').matches) {
        byId('detail-title')?.focus({preventScroll: true});
        byId('detail').scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }, 'card ' + unit.faction);
    card.dataset.id = unit.raw.ID;
    card.classList.toggle('active', unit.raw.ID === selectedId);
    card.setAttribute('aria-pressed', String(unit.raw.ID === selectedId));
    card.append(imageFor(unit, true), element('strong', unit.name),
      element('small', unit.raw.NAME || unit.raw.ID), element('small', unit.raw.ID));
    if (unit.placeholder) card.append(element('small', '阵营标志'));
    if (!unit.defined) card.append(element('small', '注册但无定义'));
    if (unit.hidden) card.append(element('small', '隐藏单位'));
    const numbers = element('div', undefined, 'mini');
    for (const [label, field] of [['造价', 'COST'], ['生命', 'STRENGTH']]) {
      const item = element('span', label + ' ');
      item.append(element('b', display(unit.raw[field], unit.defined ? '—' : '定义缺失')));
      numbers.append(item);
    }
    card.append(numbers);
    return card;
  }
  function renderFilterSummary(current) {
    const parts = [
      current.version === 'ra2' ? '原版' : '尤复',
      core.labels.factions[current.faction] || '全部阵营',
      core.labels.types[current.type] || '全部类型'
    ];
    if (current.cost !== null) parts.push('造价 ≤ ' + current.cost);
    if (current.health !== null) parts.push('生命 ≥ ' + current.health);
    if (current.tech) parts.push('科技等级 ' + byId('tech').selectedOptions[0].textContent);
    if (current.status) parts.push(current.status);
    if (current.search.trim()) parts.push('搜索“' + current.search.trim() + '”');
    parts.push(current.showHidden ? '显示隐藏单位' : '隐藏单位已收起');
    byId('current-filters').textContent = '目前是 ' + parts.join(' · ');
  }
  function render() {
    const current = state();
    renderFilterSummary(current);
    const results = core.query(database.units, current);
    const pages = Math.max(1, Math.ceil(results.length / pageSize));
    page = Math.max(0, Math.min(page, pages - 1));
    visible = results.slice(page * pageSize, (page + 1) * pageSize);
    if (!visible.some(unit => unit.raw.ID === selectedId)) selectedId = visible[0]?.raw.ID || null;
    byId('count').textContent = '共 ' + results.length + ' 个结果';
    const cards = visible.map(renderCard);
    if (!cards.length) {
      const empty = element('div', undefined, 'empty');
      empty.append(element('p', '没有匹配的记录。'), button('重置筛选', () => resetFilters(true)));
      cards.push(empty);
    }
    byId('grid').replaceChildren(...cards);
    byId('page').textContent = (page + 1) + ' / ' + pages;
    byId('prev').disabled = page === 0;
    byId('next').disabled = page === pages - 1;
    renderDetail(visible.find(unit => unit.raw.ID === selectedId));
    savePreferences();
  }
  function parameterPanel(record, missing = '未显式配置') {
    const panel = element('details');
    panel.append(element('summary', '完整规则参数'));
    const searchLabel = element('label', '搜索参数名', 'parameter-search');
    const input = element('input');
    input.type = 'search';
    input.placeholder = '例如 COST、RANGE';
    searchLabel.append(input);
    const results = element('div', undefined, 'raw');
    const entries = core.parameters(record);
    results.append(table(entries, missing));
    input.addEventListener('input', () => {
      const query = input.value.trim().toUpperCase();
      const matches = entries.filter(([name]) => name.includes(query));
      results.replaceChildren(matches.length ? table(matches, missing) : element('p', '没有匹配的参数。', 'muted'));
    });
    panel.append(searchLabel, results);
    return panel;
  }
  function combatPanel(version, role, id, visited = new Set(), expanded = false) {
    const panel = element('details', undefined, 'combat-record');
    panel.open = expanded;
    panel.append(element('summary', role + ' · ' + id));
    const recordKey = core.key(version, role + ':' + id);
    if (visited.has(recordKey)) {
      panel.append(element('p', '此关联已在上级出现，循环在此终止。', 'muted'));
      return panel;
    }
    const record = database.combat.get(recordKey);
    if (!record) {
      panel.append(element('p', '关联记录未收录。引用 ID 保留为 ' + id, 'muted'));
      return panel;
    }
    const nextVisited = new Set(visited).add(recordKey);
    if (role === '武器') {
      panel.append(table([
        ['基础伤害 DAMAGE', record.DAMAGE], ['开火间隔 ROF（逻辑帧）', record.ROF],
        ['射程 RANGE（格）', record.RANGE], ['连发 BURST', record.BURST],
        ['速度 SPEED（规则参数）', record.SPEED],
        ['弹体 PROJECTILE', record.PROJECTILE], ['弹头 WARHEAD', record.WARHEAD]
      ]));
    }
    if (role === '弹头' && id.toUpperCase() === 'VIRUS') {
      panel.append(element('p', '同名节包含单位与弹头字段，以下保留源文件显式参数。', 'notice'));
    }
    panel.append(parameterPanel(record));
    for (const [field, targetRole] of Object.entries(core.referenceRoles)) {
      if (record[field]) panel.append(combatPanel(version, targetRole, record[field], nextVisited));
    }
    return panel;
  }
  function notesFor(unit) {
    const notes = [];
    if (!unit.defined) notes.push('此 ID 出现在注册表中，来源规则文件缺少对应定义。');
    if (unit.hidden && !unit.attachment) notes.push('隐藏单位，当前没有独立图标。' +
      (unit.hiddenVariant ? '对应条目：' + unit.hiddenVariant + '。' : ''));
    if (unit.attachment) notes.push('附属单位，来源为 ' +
      (unit.attachment.parents.join('、') || unit.attachment.source) + '，归入来源阵营的隐藏单位。');
    if (unit.placeholder) notes.push('当前使用阵营标志作为图片。');
    if (unit.raw.ID === 'DRED') notes.push('DredLauncher 的 DAMAGE=50 属于发射器配置，生成导弹另有伤害规则。');
    if (unit.raw.ID === 'VIRUS') notes.push('VIRUS 单位与 Virus 弹头共用节名。两类字段均按源数据保留，查询时按角色区分。');
    if (unit.raw.ID === 'LUNR') notes.push('登月火箭员来自战役资料，可通过步兵或空中类型查询。');
    if (['IVAN', 'CIVAN'].includes(unit.raw.ID)) {
      const versionKey = unit.raw['版本'] === 'ra2' ? 'ra2' : 'yr-patch';
      const proof = database.verifications[versionKey];
      const damage = proof?.CombatDamage?.IVANDAMAGE;
      notes.push('IvanBomber 的 DAMAGE 为武器字段。' + (damage ?
        '现有复核记录中全局 IVANDAMAGE=' + damage + '，该字段用于炸弹伤害。' : '炸弹效果需结合全局规则。'));
    }
    return notes;
  }
  function renderDetail(unit) {
    const target = byId('detail');
    if (!unit) {
      target.replaceChildren(element('p', '没有匹配的单位。'), button('重置筛选', () => resetFilters(true)));
      return;
    }
    const raw = unit.raw;
    const missing = unit.defined ? '未显式配置' : '定义缺失';
    const heading = element('h2', unit.name);
    heading.id = 'detail-title';
    heading.tabIndex = -1;
    const back = button('返回列表', () => {
      byId('grid').querySelector('[aria-pressed="true"]')?.focus({preventScroll: true});
      byId('list').scrollIntoView({behavior: 'smooth', block: 'start'});
    });
    back.id = 'back-list';
    const subtitle = element('p', display(raw.NAME, raw.ID), 'subtitle');
    const tags = element('div');
    const tagLabels = [core.labels.versions[raw['版本']], ...unit.factions.map(value => core.labels.factions[value] || value),
      ...unit.types.map(value => core.labels.types[value]), raw['定义状态']];
    for (const text of tagLabels) tags.append(element('span', text, 'tag'));
    const power = core.number(raw.POWER);
    let powerDisplay = raw.POWER;
    if (power !== null) powerDisplay += power < 0 ? '（耗电）' : power > 0 ? '（发电）' : '（无电力增减）';
    const baseRows = [
      ['ID', raw.ID], ['登记类型', raw['类别']], ['造价 COST', raw.COST], ['生命 STRENGTH', raw.STRENGTH],
      ['装甲 ARMOR', raw.ARMOR], ['速度 SPEED（规则参数）', raw.SPEED], ['视野 SIGHT', raw.SIGHT],
      ['电力 POWER', powerDisplay], ['转速 ROT（规则参数）', raw.ROT], ['科技等级 TechLevel', raw.TECHLEVEL],
      ['科技阶段', core.labels.stages[unit.stage] || unit.stage], ['前置条件 PREREQUISITE', raw.PREREQUISITE],
      ['可用国家 OWNER', raw.OWNER], ['获取条件', unit.image.acquisition || unit.metadata.acquisition],
      ['建造时间', '待核实']
    ];
    target.replaceChildren(back, imageFor(unit, false), heading, subtitle, tags, element('h3', '基本属性'), table(baseRows, missing));
    for (const note of notesFor(unit)) target.append(element('p', note, 'notice muted'));
    target.append(element('h3', '武器与关联规则'));
    const references = core.weaponReferences(raw);
    if (!references.length) target.append(element('p', missing + '武器', 'muted'));
    for (const [field, id] of references) {
      const title = field === 'PRIMARY' ? '主武器 PRIMARY' : field;
      target.append(element('h3', title), combatPanel(raw['版本'], '武器', id, new Set(), field === 'PRIMARY'));
    }
    target.append(element('p', 'DAMAGE 为显式基础伤害，ROF 为逻辑帧间隔。特殊效果与完整伤害需结合弹头倍率、全局规则和引擎行为核实。', 'muted'),
      parameterPanel(raw, missing), element('h3', '数据来源'), element('p', raw['规则来源'], 'muted'));
  }
  function initialize() {
    if (!core || !window.RA2_DATA) throw new Error('数据文件缺失');
    database = core.normalize(window.RA2_DATA);
    byId('version').value = 'ra2';
    byId('faction').value = 'soviet';
    byId('type').value = 'ground';
    byId('show-hidden').checked = false;
    const preferences = restorePreferences();
    byId('show-hidden').addEventListener('change', () => { page = 0; render(); });
    const mobile = window.matchMedia('(max-width: 768px)');
    const filters = document.querySelector('.filters');
    filters.open = typeof preferences?.filtersOpen === 'boolean' ? preferences.filtersOpen : !mobile.matches;
    filters.addEventListener('toggle', savePreferences);
    mobile.addEventListener('change', event => { filters.open = !event.matches; });
    for (const id of filterIds) {
      byId(id).addEventListener('input', () => {
        page = 0;
        synchronizeRanges();
        render();
      });
    }
    for (const name of ['cost', 'health']) {
      byId(name + '-range').addEventListener('input', event => {
        byId(name).value = event.target.value;
        page = 0;
        synchronizeRanges();
        render();
      });
      byId(name + '-clear').addEventListener('click', () => {
        byId(name).value = '';
        page = 0;
        synchronizeRanges();
        render();
      });
    }
    byId('search').addEventListener('input', () => { page = 0; render(); });
    byId('search-form').addEventListener('submit', event => { event.preventDefault(); page = 0; render(); });
    byId('version').addEventListener('change', () => {
      page = 0;
      synchronizeRanges();
      render();
    });
    byId('reset').addEventListener('click', () => resetFilters(true));
    byId('prev').addEventListener('click', () => { page--; render(); });
    byId('next').addEventListener('click', () => { page++; render(); });
    synchronizeRanges();
    render();
  }
  try {
    initialize();
  } catch (error) {
    const notice = byId('load-error');
    notice.hidden = false;
    notice.textContent = '页面数据加载失败。请确认 assets/data/database.js 和页面脚本存在，或运行 python scripts/build-data.py 后重新打开。';
    byId('count').textContent = '数据未加载';
    byId('grid').replaceChildren();
    byId('detail').replaceChildren(element('p', '请完成数据构建后刷新页面。'));
    for (const control of document.querySelectorAll('input, select, button')) control.disabled = true;
    console.warn('RA2 database initialization failed', error.message);
  }
})();

