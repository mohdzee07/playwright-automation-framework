import { test, expect } from '@playwright/test';

test("Login Ecomm", async({page})=>
{
  
   await page.goto("https://letcode.in/login");
   await page.getByPlaceholder("Enter Username").fill("mor_2314");
   await page.getByPlaceholder("Enter Password").fill("83r5^_");
   await page.getByRole('button',{name : 'Login'}).click()

})