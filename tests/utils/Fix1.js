const base = require('@playwright/test');

exports.customTest = base.test.extend({

    loggedInPage: async ({ browser }, use) => {

        // Setup

        const context =await browser.newContext();

        const page =await context.newPage();

        await page.goto(process.env.URL);

        await page.locator('#userEmail').fill(process.env.USERNAME);

        await page.locator('#userPassword').fill(process.env.PASSWORD);

        await page.locator("[value='Login']").click();

        // await base.expect(
        //     page.locator('.card-body')
        //         .first()
        // ).toBeVisible();

        // console.log(
        //     "Login Successful"
        // );

        // Pass Page To Test

        await use(page);

        // Teardown

        await context.close();
    }

});

exports.expect = base.expect;
``