import { test, expect } from '@playwright/test';


test("Multipl Env", async({page})=>
{
    console.log(process.env.URL)
    console.log(process.env.USERNAME1)
   // const url =process.env.URL
    //await page.goto(url)
})