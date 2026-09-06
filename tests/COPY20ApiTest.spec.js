const { test, expect, request } = require('@playwright/test');

const loginpayload = {userEmail: "mehu1414@gmail.com",userPassword: "Mehu@123"};

const orderpayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

let token;
let orderid;

test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const loginResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginpayload
        }
    );

    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();

    token = loginResponseJson.token;

    console.log("Token:", token);

    const orderresponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderpayload,
            headers: {
                'Authorization': token,
                'Content-Type': "application/json"
            }
        });

    expect(orderresponse.ok()).toBeTruthy();
    console.log(orderresponse.status())

    const orderjson = await orderresponse.json();

    console.log(orderjson);

    orderid = orderjson.orders[0];

    console.log("Order ID:", orderid);
});

test("EndtoEnd", async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("button[routerlink*='myorders']").click();

    await page.locator("tbody").waitFor();

    const rows = page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {

        const rowOrderId = await rows.nth(i).locator("th").textContent();

        if (orderid.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();

    expect(orderIdDetails).toContain(orderid);
});