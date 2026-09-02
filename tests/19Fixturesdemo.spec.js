const {test,expect} = require('@playwright/test')
const {customtest} = require("./utils/Fixtures.js")


customtest("Fixture Implmentation", async({autheticatedPage,CartPage,testdataorder})=>
{

    CartPage.goto("https://rahulshettyacademy.com/client")
    console.log(testdataorder.productName)

})