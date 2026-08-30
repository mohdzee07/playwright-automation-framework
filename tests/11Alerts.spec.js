import {test,expect}  from "@playwright/test"

test("Alert Popups", async({page})=>
{


    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-6");
    
    page.on('dialog', async dialog=>
    {
       
        console.log(dialog.type())
        console.log(dialog.message())
        await dialog.accept("Helllo Zee!!")
     

    })
    await page.getByTestId("prompt-btn").click();
   
    //await page.pause()
    await expect(page.getByTestId("alert-result")).toHaveText("Prompt value: Helllo Zee!!")
})