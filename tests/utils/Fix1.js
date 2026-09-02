const  base = require ("@playwright/test")


exports.customtext = base.test.extend({

    authenticate : async({broswer}, use)=>
    {

        const context = await broswer.newContext()
        const page = await context.newPage()


    }



})