import {test, expect} from "@playwright/test"


test("Sauce Demo",  async({page})=>
{

   await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();
    await page.locator(".inventory_item_description").filter({hasText:"Sauce Labs Backpack"}).getByRole("button",{name:"Add to cart"}).click();
  
 // await page.pause();
    //very low to high and see it the elements asr arranged in low to high

    await page.getByTestId("product-sort-container").selectOption("lohi")
         const price = await page.locator(".inventory_item_price").allTextContents();
         console.log(price)
         const prices = price.map(price=>parseFloat(price.replace("$","")))
         console.log(prices)
         console.log(price.length)

      for(let i=0;i<prices.length-1;i++)
      {
          expect((prices[i])<=(prices[i+1])).toBeTruthy();
      }

        await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind") 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
  await page.pause(); 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   
   await page.locator("tbody tr").filter({hasText:orderId}).getByRole("buttton",{name:'View'}).first().click();
  

    })