import {test,expect}  from "@playwright/test"

test("Alert Popups", async({page})=>
{


    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-6");
//scroll
    await page.getByTestId("scroll-spacer").scrollIntoViewIfNeeded()
     //await page.mouse.wheel(0, 3000);
     //await page.pause();
   await page.getByTestId("Draggable item").dragTo(page.getByText("Drop here"));
  

})