async (page) => {
  await page.setViewportSize({width: 1440, height: 900});
  await page.evaluate(() => localStorage.removeItem('ra2-data.preferences.v1'));
  await page.reload();
  const values = {faction: 'soviet', type: 'ground', cost: '2000', health: '100',
    tech: '2', status: '已定义', sort: 'SPEED', direction: '-1', search: 'HTNK'};
  for (const [id, value] of Object.entries(values)) {
    const control = page.locator('#' + id);
    if (await control.evaluate(node => node.tagName === 'SELECT')) await control.selectOption(value);
    else await control.fill(value);
  }
  await page.locator('#show-hidden').check();
  for (const version of ['yr', 'ra2']) {
    await page.locator('#version').selectOption(version);
    for (const [id, value] of Object.entries(values)) {
      if (await page.locator('#' + id).inputValue() !== value) throw new Error('Filter lost: ' + id);
    }
    if (!await page.locator('#show-hidden').isChecked()) throw new Error('Hidden switch lost');
    if (await page.locator('.card[data-id="HTNK"]').count() !== 1) throw new Error('Filtered unit missing');
    if (!(await page.locator('#detail').innerText()).includes(version === 'yr' ? '尤里的复仇' : '红警2原版')) {
      throw new Error('Detail uses wrong version');
    }
  }
  await page.setViewportSize({width: 375, height: 812});
  await page.locator('#version').selectOption('yr');
  const summary = await page.locator('#current-filters').innerText();
  for (const part of ['尤复', '苏军', '地面载具', '造价 ≤ 2000', '生命 ≥ 100', '科技等级 2', '已定义', 'HTNK', '显示隐藏单位']) {
    if (!summary.includes(part)) throw new Error('Summary lost: ' + part);
  }
  await page.locator('.filters > summary').click();
  await page.locator('#reset').click();
  if (await page.locator('#version').inputValue() !== 'yr') throw new Error('Reset lost version');
  if (await page.locator('#show-hidden').isChecked()) throw new Error('Reset did not clear hidden switch');
  if (await page.locator('#search').inputValue() !== '') throw new Error('Reset did not clear search');
  return {versionSwitches: 3, preservedControls: Object.keys(values), hiddenSwitch: true, mobileSummary: true, reset: true};
}
