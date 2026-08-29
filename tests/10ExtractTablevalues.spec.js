import {test,expect}  from "@playwright/test"

test("ExtrcatTable Values", async({page})=>
{


    await page.goto("https://demoqa.com/webtables");

   //const table = await page.locator("tbody td").nth(13).click();
   //await page.pause();

   const tables=   await page.locator("tbody tr")
  console.log(await tables.allTextContents())
   const count = await tables.count()
  const emails1= []
   for(let i= 0;i<count ;i++)
   {
     const emails = await tables.nth(i).locator('td').nth(4).allTextContents()
     emails1.push(emails)
    
   }
   console.log(emails1)


   //fethc names

   const name = await page.locator("tbody tr").nth(2).locator("td").filter({hasText:"Kierra"}).first().textContent();
   console.log(name)
   await expect(await page.locator("tbody tr").nth(2).locator("td").filter({hasText:"Kierra"}).first()).toHaveText("Kierra")


 
})