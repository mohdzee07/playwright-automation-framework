import {test,expect}  from "@playwright/test"

test("Click", async({page})=>
{
    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-6")
     //disaaperbutton
     await page.getByLabel("Disappear button").click();

     await page.getByLabel("Change text button").click();

     await expect(page.getByTestId("changing-text")).toHaveText("Text has changed!");

     await page.getByRole("button", {name :'Increment'}).click();
     await expect(page.getByTestId("counter-result")).toHaveCount(1)
})