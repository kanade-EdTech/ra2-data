async (page) => {
  const errors = [];
  const failed = [];
  const onError = error => errors.push(error.message);
  const onResponse = response => { if (response.status() >= 400) failed.push(response.url()); };
  page.on('pageerror', onError);
  page.on('response', onResponse);
  await page.setViewportSize({width:375,height:812});
  await page.goto('http://127.0.0.1:8766/release/ra2-data-preview/index.html');
  const initial = await page.locator('#count').innerText();
  const summary = await page.locator('#current-filters').innerText();
  if (initial !== '共 11 个结果' || summary !== '目前是 原版 · 苏军 · 地面载具') throw new Error('Incorrect packaged defaults');
  const images = await page.evaluate(async () => {
    const statuses = await Promise.all(window.RA2_DATA.images.map(async item => {
      const response = await fetch(new URL('ra2-conghangdaola-mainboard/' + item.exportImage, location.href));
      return response.status;
    }));
    return {count:statuses.length,failed:statuses.filter(status => status !== 200)};
  });
  if (images.failed.length || errors.length || failed.length) throw new Error(JSON.stringify({images,errors,failed}));
  await page.locator('#version').selectOption('yr');
  if (await page.locator('#count').innerText() !== '共 559 个结果') throw new Error('Packaged version count');
  await page.locator('#search').fill('NASAM');
  await page.locator('.card').click();
  if (await page.locator('#detail-title').innerText() !== '爱国者导弹') throw new Error('Packaged detail');
  page.removeListener('pageerror', onError);
  page.removeListener('response', onResponse);
  return {initial,summary,images,errors,failed};
}
