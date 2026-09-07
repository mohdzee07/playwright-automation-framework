const { test, expect, request } = require('@playwright/test');
const {Apiutilss}= require ('./utils/Apiutilss')

const loginpayload = {userEmail: "mehu1414@gmail.com",userPassword: "Mehu@123"};

const orderpayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

const fakeorder = {data:[],message:"No Orders"}

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


    //Test Step: Intercept the "get orders for customer" API call. Allow the real request to reach the server,
    //  but override the response body with mock order data (fakeorder) before it reaches the UI. 
    // Then verify the page displays this fake order data correctly — this lets us test how the UI handles 
    // specific order scenarios (e.g., a cancelled order, an order with missing fields) without needing that 
    //   exact data to actually exist in the real database.
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/69fba3d3eb0333b6db394893",

        async route=>{
              //1.Here we are fetching a real response like header,auth, etc
            const response  = await page.request.fetch(route.request());
            //2. COnvert the fake payload from JS object t JSON format
            let body = JSON.stringify(fakeorder)
            //
            route.fulfill({

                response,
                body
            })

        }
    )

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("button[routerlink*='myorders']").click();
    await page.pause();

})