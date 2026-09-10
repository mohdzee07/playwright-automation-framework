import { test, expect } from '@playwright/test';
import { authenticator } from 'otplib';

test('login with MFA on practicesoftwaretesting.com', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.fill('#email', 'mohammedzeeshan14@gmail.com');
  await page.fill('#password', 'Mehu@@Nehu##12');
  await page.locator(".btnSubmit").click(); // it's a <button>, not input[type=submit] — see note below

  await page.pause();

  const secret = 'YA6475PBMTUCXHZM';
  const otp = authenticator.generate(secret);
  console.log('Generated OTP:', otp);

  await page.fill('#otp', otp);
  await page.click('button[type="submit"]');

  await expect(page.locator('.navbar')).toBeVisible();
});