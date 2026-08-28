import {test, expect} from "@playwright/test"

test("Page Methods", async({page})=>
{
   await page.goto("https://letcode.in/login");
   //await page.reload()
   //await page.pause();
   await page.getByPlaceholder("Enter Username").fill("mor_2314");
   await page.getByPlaceholder("Enter Password").fill("83r5^_");
   await page.getByRole('button',{name : 'Login'}).click()
   await page.goBack();
   


})