import {test,expect}  from "@playwright/test"

test("Alert Popups", async({page})=>
{


    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-6");

    await page.getByPlaceholder("type inside shadow root").fill("Zeeshan")
    await page.locator('#shadow-btn:has-text("Shadow Submit")').click();
    await page.pause()

})