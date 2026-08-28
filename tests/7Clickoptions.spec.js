import {test,expect}  from "@playwright/test"

test("Click", async({page})=>
{
     await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-1");

     await page.getByTestId("text-input").fill("Testing")
     //doublelcik
     await page.getByRole("button", {name :'Double Click'}).dblclick();
      //await page.pause();
    //right click
     await page.locator('[data-testid="right-click-btn"]').click({button:"right"})
    
//Shift click selecting mutiple vlaues
      await page.getByText('Python').nth(0).click();

      await page.getByText('JavaScript').click({modifiers: ['Shift']});

    const chltext=   await page.locator("#xpath-grandparent span").textContent();
    console.log(chltext)

    await page.getByLabel("Locator by placeholder").fill("Zeeshan")
})