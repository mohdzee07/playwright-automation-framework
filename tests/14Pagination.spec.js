const { test, expect } = require('@playwright/test');

test('find Jane Smith using for loop', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/dynamic-pagination-table#google_vignette');

  const targetName = 'Jane Smith';
  const totalPages = 4; // we know this from looking at the pagination
  let found = false;

  // Loop from page 1 to page 4 (i starts at 1, runs while i <= 4, adds 1 each time)
  for (let i = 1; i <= totalPages; i++) {

    console.log('Checking page number:', i);

    const row = page.locator('table tbody tr', { hasText: targetName });
    const isRowVisible = await row.isVisible();

    if (isRowVisible === true) {
      found = true;
      console.log('Found Jane Smith on page', i);
      break; // stop the for loop immediately, no need to check more pages
    }

    // Not found yet, so click Next (unless we're already on the last page)
    if (i < totalPages) {
      const nextButton = page.locator('a:has-text("Next")');
      await nextButton.click();
      await page.waitForTimeout(300);
    }
  }

  expect(found).toBe(true);

  const row = page.locator('table tbody tr', { hasText: targetName });
  const allCellsInRow = await row.locator('td').allTextContents();
  console.log('Row data:', allCellsInRow);
  expect(allCellsInRow[0]).toBe('Jane Smith');
});