async (page) => {
  await page.setViewportSize({width: 1440, height: 900});
  await page.evaluate(() => localStorage.removeItem('ra2-data.preferences.v1'));
  await page.reload();
  const check = (value, message) => { if (!value) throw new Error(message); };
  check(await page.locator('#count').innerText() === '共 9 个结果', 'Default Soviet ground count');
  await page.locator('#show-hidden').check();
  check(await page.locator('#count').innerText() === '共 11 个结果', 'Toggle restores duplicate miner');
  await page.locator('#search').fill('HORV');
  check(await page.locator('.card').count() === 1, 'Hidden miner searchable when enabled');
  await page.locator('#show-hidden').uncheck();
  check(await page.locator('.card').count() === 0, 'Hidden miner excluded when disabled');
  await page.locator('#reset').click();
  check(!await page.locator('#show-hidden').isChecked(), 'Reset closes hidden units');
  check(await page.locator('#count').innerText() === '共 389 个结果', 'Original visible total');
  await page.locator('#version').selectOption('yr');
  check(await page.locator('#count').innerText() === '共 524 个结果', 'Yuri visible total');
  for (const id of ['GACNST', 'NACNST', 'YACNST', 'YAREFN']) {
    await page.locator('#search').fill(id);
    check(await page.locator('.card[data-id="' + id + '"]').count() === 1, 'Deployed base remains visible: ' + id);
  }
  await page.setViewportSize({width: 375, height: 812});
  await page.locator('#search').fill('');
  check((await page.locator('#current-filters').innerText()).includes('隐藏单位已收起'), 'Mobile hidden state');
  await page.locator('.filters > summary').click();
  await page.locator('#show-hidden').check();
  await page.locator('.filters > summary').click();
  check((await page.locator('#current-filters').innerText()).includes('显示隐藏单位'), 'Mobile enabled state');
  check(await page.locator('#count').innerText() === '共 559 个结果', 'All original records accessible');
  check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Mobile fits viewport');
  await page.locator('.filters > summary').click();
  for (const [faction, id, parent] of [['soviet', 'V3ROCKET', 'V3'], ['allied', 'HORNET', 'CARRIER'], ['yuri', 'CMISL', 'BSUB']]) {
    await page.locator('#faction').selectOption(faction);
    await page.locator('#search').fill(id);
    if (await page.locator('.card[data-id="' + id + '"]').count() !== 1) throw new Error('Attachment faction: ' + id);
    if (!(await page.locator('#detail').innerText()).includes(parent)) throw new Error('Attachment source: ' + id);
    await page.locator('#show-hidden').uncheck();
    if (await page.locator('.card').count() !== 0) throw new Error('Attachment visible without switch: ' + id);
    await page.locator('#show-hidden').check();
  }
  return {attachments: 'passed', desktop: 'passed', mobile: 'passed', deployedBases: 4, visibleCounts: {ra2: 389, yr: 524}};
}
