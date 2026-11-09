async (page) => {
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('file:///F:/VS_Code_Project/ra2-data/index.html');
  check(await page.locator('#version').inputValue() === 'ra2', 'Local default version');
  check(await page.locator('#faction').inputValue() === 'soviet', 'Local default faction');
  check(await page.locator('#type').inputValue() === 'ground', 'Local default type');
  check((await page.locator('#count').innerText()).includes('11'), 'Local default count');
  await page.locator('#reset').click();
  await page.locator('#search').fill('MTNK');
  check(await page.locator('#detail-title').innerText() === '灰熊坦克', 'Local search');
  await page.locator('#version').selectOption('ra2');
  await page.locator('#reset').click();
  check((await page.locator('#count').innerText()).includes('409'), 'Local original version');
  await page.locator('#search').fill('NASAM');
  const image = page.locator('.card img');
  await image.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector('.card img').naturalWidth > 0);
  const result = {url: page.url(), originalCount: 409, imageLoaded: true, errors};
  check(errors.length === 0, 'Local JavaScript errors');
  return result;
}

