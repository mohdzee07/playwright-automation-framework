const { test, expect, request } = require('@playwright/test');
const {Apiutilss}= require ('./utils/Apiutilss')

const loginpayload = {userEmail: "mehu1414@gmail.com",userPassword: "Mehu@123"};

const orderpayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

let response;

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiutils = new Apiutilss(apiContext,loginpayload)
    response =await apiutils.createOrder(orderpayload)

   

   
});

test("EndtoEnd", async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client");

})