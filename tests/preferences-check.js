async (page) => {
  const storageKey = 'ra2-data.preferences.v1';
  await page.evaluate(key => localStorage.removeItem(key), storageKey);
  await page.reload();
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  check(await page.locator('#count').innerText() === '共 9 个结果', 'First-use defaults');
  await page.setViewportSize({width: 1440, height: 900});
  const values = {version: 'yr', faction: 'soviet', type: 'ground', cost: '2000', health: '100',
    tech: '2', status: '已定义', sort: 'SPEED', direction: '-1', search: 'HTNK'};
  for (const [id, value] of Object.entries(values)) {
    const control = page.locator('#' + id);
    if (await control.evaluate(node => node.tagName === 'SELECT')) await control.selectOption(value);
    else await control.fill(value);
  }
  await page.locator('#show-hidden').check();
  await page.reload();
  for (const [id, value] of Object.entries(values)) {
    check(await page.locator('#' + id).inputValue() === value, 'Restore ' + id);
  }
  check(await page.locator('#show-hidden').isChecked(), 'Restore hidden switch');
  check(await page.locator('.card[data-id="HTNK"]').count() === 1, 'Restored result');
  await page.locator('#reset').click();
  await page.locator('#show-hidden').check();
  await page.locator('#next').click();
  const card = page.locator('.card').nth(3);
  const selected = await card.getAttribute('data-id');
  await card.click();
  await page.locator('.filters > summary').click();
  await page.waitForTimeout(100);
  await page.reload();
  check((await page.locator('#page').innerText()).startsWith('2 /'), 'Restore page');
  check(await page.locator('.card[aria-pressed="true"]').getAttribute('data-id') === selected, 'Restore selected unit');
  check(!await page.locator('.filters').evaluate(node => node.open), 'Restore filter collapse');
  await page.evaluate(key => localStorage.setItem(key, '{broken'), storageKey);
  await page.reload();
  check(await page.locator('#version').inputValue() === 'ra2', 'Corrupt storage defaults');
  await page.evaluate(key => localStorage.setItem(key, JSON.stringify({
    version: 'bad', faction: 'bad', cost: -1, health: 'oops', showHidden: 'false', page: 999999
  })), storageKey);
  await page.reload();
  check(await page.locator('#faction').inputValue() === 'soviet', 'Validate stored options');
  check(await page.locator('#cost').inputValue() === '', 'Validate stored numbers');
  check(!await page.locator('#show-hidden').isChecked(), 'Validate stored boolean');
  await page.evaluate(() => {
    Object.defineProperty(window, 'localStorage', {configurable: true, get() { throw new Error('Storage denied'); }});
  });
  await page.locator('#search').fill('HTNK');
  check(await page.locator('.card[data-id="HTNK"]').count() === 1, 'Queries work with unavailable storage');
  check(await page.locator('#load-error').isHidden(), 'Storage failure is nonfatal');
  return {filters: 'restored', page: 'restored', selection: 'restored', collapse: 'restored', invalidStorage: 'passed', unavailableStorage: 'passed'};
}
