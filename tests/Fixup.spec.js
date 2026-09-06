const {test,expect} = require('@playwright/test')
const {customTest}= require('./utils/Fix1');

customTest(

'Verify Products Are Displayed',

async ({ loggedInPage }) => {

    const products =
        loggedInPage.locator('.card-body');

    // await expect(
    //     products.first()
    // ).toBeVisible();

}
);