import {test,expect}  from "@playwright/test"

test("Alert Popups", async({page})=>
{


    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-6");
    
   await page.getByTestId("keyboard-input").click();
   await page.keyboard.press('ArrowDown',{delay:1000})
   await page.keyboard.press('ArrowDown',{delay:1000})
   await page.keyboard.press('ArrowUp',{delay:1000})
})