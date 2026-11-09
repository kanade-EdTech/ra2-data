async (page) => {
  await page.setViewportSize({width: 375, height: 812});
  const app = page.frameLocator('iframe').first();
  if (await app.locator('#count').innerText() !== '共 9 个结果') throw new Error('Toy default count');
  if (await app.locator('#current-filters').innerText() !== '目前是 原版 · 苏军 · 地面载具 · 隐藏单位已收起') throw new Error('Toy mobile summary');
  await app.locator('.card img').first().scrollIntoViewIfNeeded();
  await app.locator('.card img').first().evaluate(image => image.decode());
  await app.locator('.filters > summary').click();
  await app.locator('#show-hidden').check();
  if (await app.locator('#count').innerText() !== '共 11 个结果') throw new Error('Toy hidden toggle');
  await app.locator('.filters > summary').click();
  await app.locator('#version').selectOption('yr');
  await app.locator('.filters > summary').click();
  await app.locator('#reset').click();
  await app.locator('.filters > summary').click();
  if (await app.locator('#count').innerText() !== '共 524 个结果') throw new Error('Toy version count');
  for (const id of ['GACNST', 'NACNST', 'YACNST', 'YAREFN']) {
    await app.locator('#search').fill(id);
    if (await app.locator('.card[data-id="' + id + '"]').count() !== 1) throw new Error('Toy base visibility: ' + id);
  }
  await app.locator('#search').fill('NASAM');
  await app.locator('.card').click();
  if (await app.locator('#detail-title').innerText() !== '爱国者导弹') throw new Error('Toy detail');
  const overflow = await app.locator('html').evaluate(root => root.scrollWidth > innerWidth);
  if (overflow) throw new Error('Toy mobile overflow');
  await page.screenshot({path:'output/playwright/toy-preview-mobile.png',fullPage:true});
  return {preview:page.url(),defaultCount:9,yuriCount:524,detail:'爱国者导弹',mobileOverflow:overflow};
}
