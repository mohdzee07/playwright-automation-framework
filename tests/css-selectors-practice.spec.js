// Run with: npx playwright test css-selectors-practice.spec.js
// Make sure to update the path below to point at wherever you save css-selectors-practice.html,
// or serve it locally and use that URL instead.

const { test, expect } = require('@playwright/test');
const path = require('path');

const FILE_URL = 'file://' + path.join(__dirname, 'css-selectors-practice.html');

test.describe('CSS Selector Practice', () => {

  test('a) tag selector', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('button').first()).toBeVisible();
  });

  test('b) class selector', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('.error-message')).toHaveText('Invalid email address');
    await expect(page.locator('.btn-primary')).toHaveText('Submit');
  });

  test('c) id selector', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('#submit-btn')).toHaveText('Log In');
  });

  test('d) attribute selectors', async ({ page }) => {
    await page.goto(FILE_URL);
    await page.locator('input[type="email"]').first().fill('test@example.com');
    await expect(page.locator('[data-testid="login-btn"]')).toBeVisible();
    await expect(page.locator('[aria-label="Close dialog"]')).toBeVisible();
  });

  test('e) combinators - descendant vs direct child', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('.main-nav li')).toHaveCount(5);   // all nested <li>
    await expect(page.locator('.main-nav > li')).toHaveCount(3); // direct children only
  });

  test('e) combinators - adjacent sibling', async ({ page }) => {
    await page.goto(FILE_URL);
    await page.locator('label + input').fill('john_doe');
    await expect(page.locator('label + input')).toHaveValue('john_doe');
  });

  test('e) combinators - general sibling', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('h4 ~ p').first()).toContainText('agree to the terms');
  });

  test('f) pseudo-classes', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('tr:nth-child(3)')).toContainText('Row 3');
    await expect(page.locator('button:disabled')).toHaveText('Processing...');
    await expect(page.locator('input:checked')).toHaveCount(1);
    await expect(page.locator('.card:not(.out-of-stock)').first()).toHaveText('In Stock Item');
  });

  test('g) :has-text()', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('.card:has-text("Out of Stock")')).toHaveText('Mouse — Out of Stock');
  });

  test('g) :has()', async ({ page }) => {
    await page.goto(FILE_URL);
    const cardWithBadge = page.locator('.product-card:has(.discount-badge)');
    await expect(cardWithBadge).toContainText('Laptop');
  });

  test('g) :visible', async ({ page }) => {
    await page.goto(FILE_URL);
    await expect(page.locator('.menu-item:visible')).toHaveCount(2);
  });

  test('h) combined login form flow', async ({ page }) => {
    await page.goto(FILE_URL);

    await page.locator('#email2').fill('test@example.com');
    await page.locator('[data-testid="password-input"]').fill('SecurePass123');

    // Button becomes enabled only after both fields are valid
    const submitBtn = page.locator('button[type="submit"]:not(:disabled)');
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    await expect(page.locator('.alert:has-text("Login successful")')).toBeVisible();
  });

});
