import {test,expect}  from "@playwright/test"

test("NEW Window handling", async({browser})=>
{

    const context =  await browser.newContext();
    const page  = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/windows");

    const [windowhandles] = await Promise.all([
    
        context.waitForEvent('page'),
        await page.getByText("Click Here").click()

    ])
    await windowhandles.waitForLoadState();
    await expect(windowhandles).toHaveURL("https://the-internet.herokuapp.com/windows/new")

    console.log(await windowhandles.getByText("New Window").textContent());

   await  expect(windowhandles.getByText("New Window")).toHaveText('New Window')

   //To fins the nu,ber of tbas in acontext
   const pages = context.pages();
   console.log(pages.length)

   const originalpoage = pages[0]
   const newpage = pages[1]

   await newpage.bringToFront();

    await page.pause();
})