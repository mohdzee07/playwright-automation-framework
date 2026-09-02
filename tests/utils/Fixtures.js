const base  =  require("@playwright/test")


exports.customtest = base.test.extend({

autheticatedPage: async ({browser}, use)=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
   const email = "mehu1414@gmail.com";
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Mehu@123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await use(page)
   await context.close();
},

CartPage :async({autheticatedPage},use)=>
{
  await autheticatedPage.locator("[routerlink*='cart']").click();
  await use(autheticatedPage)
},

//Data driven fixture-- we can just creata an object and use it
testdataorder: 
{
   productName: 'Adidas'
}

}

)