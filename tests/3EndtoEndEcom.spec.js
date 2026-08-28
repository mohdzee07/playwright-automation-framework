const { test, expect } = require('@playwright/test');
 
test("@Web Ecommmerce End2End", async ({ page }) => {
  
   const email = "mehu1414@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = await page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login", { waitUntil: 'domcontentloaded' });
   //await page.waitForLoadState('networkidle');
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Mehu@123");
   await page.locator("[value='Login']").click();
   await page.locator(".card-body").filter({hasText:productName}).getByRole('button', {name : 'Add To Cart'}).click()
   
//    await page.locator(".card-body b").first().waitFor();
//    const allproducts = await page.locator(".card-body b").allTextContents()
//    console.log(allproducts)
//    const count = await products.count();

//    for(let i=0; i<count;i++)
//    {
//       if(await products.nth(i).locator("b").textContent()===productName)
//       {
//            await products.nth(i).locator("text= Add To Cart").click();
//            break;
//       }
//    }

//    await page.locator("[routerlink*=cart]").click()
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
   //await page.pause(); 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   await page.locator("tbody tr").filter({hasText:orderId}).getByText('View').click();

})