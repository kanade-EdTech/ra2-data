async (page) => {
  const errors = [];
  const failedRequests = [];
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  const onError = error => errors.push(error.message);
  const onResponse = response => { if (response.status() >= 400) failedRequests.push(response.url()); };
  page.on('pageerror', onError);
  page.on('response', onResponse);
  const count = async () => (await page.locator('#count').innerText()).match(/\d+/)?.[0];
  const version = async value => page.locator('#version').selectOption(value);
  const search = async value => page.locator('#search').fill(value);
  const reset = async () => {
    if (!await page.locator('.filters').evaluate(node => node.open)) await page.locator('.filters > summary').click();
    await page.locator('#reset').click();
  };
  const detailValue = async name => page.locator('#detail dt').filter({hasText: name}).first()
    .evaluate(node => node.nextElementSibling.textContent);
  const results = [];
  await page.goto('http://127.0.0.1:8766');
  await page.setViewportSize({width: 1440, height: 1000});
  check(await page.locator('#version').inputValue() === 'ra2', 'Default original version');
  check(await page.locator('#faction').inputValue() === 'soviet', 'Default Soviet faction');
  check(await page.locator('#type').inputValue() === 'ground', 'Default ground vehicles');
  check(await count() === '11', 'Default result count');
  check(await page.locator('.card').count() === 11, 'Default cards');
  await version('yr');
  check(await count() === '559', 'Unfiltered Yuri population');
  check(await page.locator('.card').count() === 48, 'Page size');
  await version('ra2');
  check(await count() === '409', 'Original count');
  results.push('A01 population and default state');

  for (const game of ['ra2', 'yr']) {
    await version(game);
    for (const name of ['灰熊坦克', 'Grizzly', ' mtnk ']) {
      await search(name);
      check(await page.locator('#detail-title').innerText() === '灰熊坦克', 'Search ' + name);
    }
    check(await detailValue('生命 STRENGTH') === '300', 'Grizzly strength');
    check(await detailValue('速度 SPEED') === '7', 'Grizzly speed');
    check(await detailValue('视野 SIGHT') === '8', 'Grizzly sight');
    check(await detailValue('基础伤害 DAMAGE') === '65', 'Grizzly weapon damage');
    check(await detailValue('射程 RANGE') === '5', 'Grizzly range');
    await search('NASAM');
    check(await detailValue('生命 STRENGTH') === '900', 'Patriot strength');
    check(await detailValue('基础伤害 DAMAGE') === '75', 'Patriot damage');
    check(await detailValue('转速 ROT') === (game === 'ra2' ? '未显式配置' : '8'), 'Patriot ROT');
    const roles = await page.locator('#detail .combat-record > summary').allTextContents();
    check(roles.some(text => text.includes('弹体')) && roles.some(text => text.includes('弹头')), 'Projectile/warhead chain');
    await search('CIVAN');
    check(await detailValue('造价 COST') === (game === 'ra2' ? '1000' : '1750'), 'CIVAN version price');
  }
  results.push('A04–A08 reference values, versioned detail and search');

  await version('yr');
  for (const faction of ['allied', 'soviet', 'yuri']) {
    await page.locator('#faction').selectOption(faction);
    check(await count() === '1', 'CIVAN multi-faction match');
  }
  await reset();
  await search('LUNR');
  for (const type of ['air', 'infantry']) {
    await page.locator('#type').selectOption(type);
    check(await count() === '1', 'LUNR overlapping category');
  }
  await version('ra2');
  check(await count() === '0', 'LUNR absent from original');
  check(await page.locator('#detail-title').count() === 0, 'Empty detail cleared');
  await page.locator('#detail button').click();
  check(await count() === '409', 'Empty reset');
  results.push('A07, A09, A13 multi-faction, multi-type and empty state');

  await version('yr');
  await page.locator('#status').selectOption('注册但无定义');
  check(await count() === '6', 'Undefined count');
  check(await detailValue('生命 STRENGTH') === '定义缺失', 'Undefined value status');
  await version('ra2');
  await page.locator('#status').selectOption('注册但无定义');
  check(await count() === '6', 'Original undefined count');
  await reset();
  await page.locator('#cost').fill('0');
  check(Number(await count()) > 0, 'Zero cost valid');
  check((await page.locator('.card .mini').allTextContents()).every(text => text.includes('造价 0')), 'Zero cost displayed');
  await page.locator('#cost-clear').click();
  check(await count() === '409', 'Clear cost restriction');
  await page.locator('#cost-range').fill('700');
  check(await page.locator('#cost').inputValue() === '700', 'Slider sync');
  await page.locator('#health').fill('300');
  await page.locator('#faction').selectOption('allied');
  await page.locator('#type').selectOption('ground');
  await page.locator('#sort').selectOption('COST');
  await page.locator('#direction').selectOption('-1');
  check(Number(await count()) > 0, 'Combined filter');
  await reset();
  check(await page.locator('#sort').inputValue() === 'name', 'Reset sorting');
  await page.locator('#next').click();
  check(await page.locator('#page').innerText() === '2 / 9', 'Pagination');
  check(await page.locator('.card.active').count() === 1, 'Selected page result');
  await search('mtnk');
  check(await page.locator('#page').innerText() === '1 / 1', 'Query resets pagination');
  await page.locator('#search').focus();
  await page.keyboard.press('Enter');
  check(await count() === '1', 'Keyboard form submit');
  check(await page.locator('#search').evaluate(node => node === document.activeElement), 'Search focus retained');
  results.push('A10–A13, A15 numeric limits, controls, pagination, missing values');

  const parameterPanel = page.locator('#detail > details').last();
  await parameterPanel.locator(':scope > summary').click();
  await parameterPanel.locator('input').fill('cost');
  check(await parameterPanel.locator('.raw dt').count() === 1, 'Parameter name filter');
  check(await parameterPanel.locator('.raw dt').innerText() === 'COST', 'Case-insensitive parameter search');
  await version('yr');
  await search('VIRUS');
  check(await page.locator('#detail-title').innerText() === '病毒狙击手', 'Virus unit');
  check((await page.locator('#detail .combat-record > summary').allTextContents()).some(text => text.includes('弹头 · Virus')), 'Virus role');
  await search('FV');
  check((await page.locator('#detail h3').allTextContents()).includes('WEAPON17'), 'Numbered weapons');
  results.push('A02, A14 roles, all numbered weapons and parameter search');

  await page.evaluate(() => {
    const weapon = window.RA2_DATA.weapons.find(row => row['版本'] === 'yr' && row.ID === 'REDEYE2');
    weapon.AIRBURSTWEAPON = 'RedEye2';
    const unit = window.RA2_DATA.units.find(row => row['版本'] === 'yr' && row.ID === 'NASAM');
    unit.SECONDARY = 'MissingWeapon';
  });
  await search('NASAM');
  check((await page.locator('#detail').textContent()).includes('循环在此终止'), 'Cycle guard');
  check((await page.locator('#detail').textContent()).includes('MissingWeapon'), 'Missing reference ID');
  check((await page.locator('#detail').textContent()).includes('关联记录未收录'), 'Missing reference status');
  await page.evaluate(() => {
    delete window.RA2_DATA.weapons.find(row => row['版本'] === 'yr' && row.ID === 'REDEYE2').AIRBURSTWEAPON;
    window.RA2_DATA.units.find(row => row['版本'] === 'yr' && row.ID === 'NASAM').SECONDARY = '';
  });
  results.push('A14 cyclic and missing references');
  for (const width of [1440, 1024, 768, 375]) {
    await page.setViewportSize({width, height: 900});
    await reset();
    await search('NASAM');
    await page.locator('.card').click();
    check(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'Overflow at ' + width);
    if (width <= 768) {
      check(await page.locator('#detail-title').evaluate(node => node === document.activeElement), 'Mobile detail focus');
    }
    await page.locator('#back-list').click();
    check(await page.locator('.card.active').evaluate(node => node === document.activeElement), 'Return-list focus');
    await page.locator('.card.active').press('Enter');
    check(await page.locator('#detail-title').count() === 1, 'Keyboard card');
  }
  await page.screenshot({path: 'output/playwright/mobile.png', fullPage: true});
  await page.setViewportSize({width: 1440, height: 1000});
  await page.screenshot({path: 'output/playwright/desktop.png', fullPage: true});
  results.push('A17–A18 four viewport widths and keyboard interaction');

  await page.evaluate(() => {
    const image = document.querySelector('.card img');
    window.ra2ImageErrors = 0;
    image.addEventListener('error', () => { window.ra2ImageErrors++; });
    image.src = 'data:image/png;base64,invalid';
  });
  await page.waitForFunction(() => window.ra2ImageErrors === 1 &&
    document.querySelector('.card img').complete && document.querySelector('.card img').naturalWidth > 0);
  check(await page.evaluate(() => window.ra2ImageErrors) === 1, 'Single fallback event');
  check(await page.locator('.card img').getAttribute('alt') === '爱国者导弹（阵营标志）', 'Fallback alt');
  check(await page.locator('.card .image-caption').innerText() === '图片加载失败，使用阵营标志', 'Visible image fallback caption');
  results.push('A16 image failure fallback');

  check(errors.length === 0, 'Uncaught page errors: ' + errors.join(', '));
  check(failedRequests.length === 0, 'Failed resource requests: ' + failedRequests.join(', '));
  page.removeListener('response', onResponse);
  await page.route('**/assets/data/database.js', route => route.abort());
  await page.reload();
  check(await page.locator('#load-error').isVisible(), 'Missing bundle message');
  check(await page.locator('#grid .card').count() === 0, 'Missing bundle has no stale cards');
  check(await page.locator('#search').isDisabled(), 'Failed state disables controls');
  await page.unroute('**/assets/data/database.js');
  await page.reload();
  results.push('A20 load failure handling');
  await page.setViewportSize({width: 375, height: 812});
  const summary = page.locator('#current-filters');
  check(await summary.isVisible(), 'Collapsed mobile summary visible');
  check(await summary.innerText() === '目前是 原版 · 苏军 · 地面载具', 'Default filter summary');
  await page.locator('.filters > summary').click();
  check(!await summary.isVisible(), 'Expanded filter summary hidden');
  await page.locator('#cost').fill('0');
  await page.locator('#health').fill('100');
  await page.locator('#tech').selectOption('2');
  await page.locator('#status').selectOption('已定义');
  await search('HTNK');
  await page.locator('.filters > summary').click();
  check(await summary.isVisible(), 'Summary visible after collapse');
  const summaryText = await summary.innerText();
  for (const fragment of ['造价 ≤ 0', '生命 ≥ 100', '科技等级 2', '已定义', '搜索“HTNK”']) {
    check(summaryText.includes(fragment), 'Current filter field ' + fragment);
  }
  await version('yr');
  check(await summary.innerText() === '目前是 尤复 · 全部阵营 · 全部类型 · 搜索“HTNK”', 'Summary updates on version switch');
  await reset();
  await page.locator('.filters > summary').click();
  check(await summary.innerText() === '目前是 尤复 · 全部阵营 · 全部类型', 'Summary updates on reset');
  check(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), 'Summary mobile overflow');
  await page.setViewportSize({width: 1440, height: 1000});
  await page.locator('.filters > summary').click();
  check(!await summary.isVisible(), 'Summary hidden on desktop');
  results.push('Mobile collapsed filter summary and live updates');
  page.removeListener('pageerror', onError);
  return {passed: results, uncaughtErrors: errors, failedRequests};
}

