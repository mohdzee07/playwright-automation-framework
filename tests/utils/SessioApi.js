const base  =  require("@playwright/test")



exports.customtest1 = base.test.extend({


    apilogin :  async ({browser},use) =>
    {
            const context = await browser.newContext();
             const page = await context.newPage();
            const email = "mehu1414@gmail.com";
            await page.goto("https://rahulshettyacademy.com/client");
            await page.locator("#userEmail").fill(email);
            await page.locator("#userPassword").fill("Mehu@123");
            await page.locator("[value='Login']").click();
            await page.waitForLoadState('networkidle');
          /// this will fetch the storage state and save it to a file called storage.json
            await context.storageState({path : 'storage.json'})
            //Once stirage state is saved, we can invoke a context with this storage state and 
            // we can use it to login without entering credentials again.
            let webContext = await browser.newContext({storageState : 'storage.json'})
            await use(webContext)
  
             //teardown fixture
            await webContext.close();
           
    }
})