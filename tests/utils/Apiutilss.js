class Apiutilss
{


    constructor(apiContext,loginpayload)
    {
     this.apiContext = apiContext
     this.loginpayload =loginpayload
    }
async  gettoken()
    {

           
       const loginResponse = await this.apiContext.post(
                "https://rahulshettyacademy.com/api/ecom/auth/login",
                {
                    data: this.loginpayload
                });
        
          
        
            const loginResponseJson = await loginResponse.json();
        
             const token = loginResponseJson.token;
        
            console.log("Token:", token);
            return token;
        
    }

  async  createOrder(orderpayload)
    {

        let response= {};
           response.token = await this.gettoken();
         const orderresponse = await this.apiContext.post(
                "https://rahulshettyacademy.com/api/ecom/order/create-order",
                {
                    data: orderpayload,
                    headers: {
                        'Authorization': this.gettoken(),
                        'Content-Type': "application/json"
                    }
                });
        
       
            console.log(orderresponse.status())
        
            const orderresponsejson = await orderresponse.json();
        
            console.log(orderresponsejson);
        
            let orderid = orderresponsejson.orders[0];
        
            console.log("Order ID:", orderid);
            
             response.orderid = orderid
            return response;
            
    }

}

module.exports = {Apiutilss}