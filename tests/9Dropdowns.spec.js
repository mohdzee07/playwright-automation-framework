import {test,expect}  from "@playwright/test"

test("Dropdowns", async({page})=>
{
   await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-6")
   //Custom Dropdown (Div/Li based — React, Angular, MUI, Bootstrap)

    await page.getByTestId("custom-dropdown-toggle").click();
    await page.getByRole("listitem").filter({hasText:'Alpha'}).click();
    await expect(page.getByTestId("custom-dropdown-toggle")).toHaveText("Alpha")
    
    //HTML DD

    await page.selectOption("#dynamic-select","Selenium")

    //await page.pause();
})

test("amazon dropdown", async({page})=>
{


    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=4222606898054801347&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062036&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=4222606898054801347--&hvexpln=nav&gad_source=1")
    await page.getByPlaceholder("Search Amazon.in").fill("Adidas Sneakers")
   await page.locator('#sac-suggestion-row-1').waitFor({ state: 'visible' });
    await page.locator('#sac-suggestion-row-4').click();
    //await page.pause()
})