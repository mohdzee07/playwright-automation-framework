const {test} = require("@playwright/test")

//Gives you access to all of the library's functions for reading/writing Excel files 
import * as  XLSX from 'xlsx'
//Imports Node.js's built-in path module, which provides utilities for working with file 
// and directory paths in a way that works correctly across operating systems
import path from 'path'

const userdatafile =  path.join(__dirname,'../testdata/exceldata.xlsx')
//Opens and reads the actual .xlsx file from disk at the path you just built, 
// and parses its entire structure into a JavaScript object.
    const workbook = XLSX.readFile(userdatafile);
    
    const worksheet = workbook.Sheets["Sheet1"]
    //Converts the raw worksheet data into a clean, usable array of JavaScript objects
    const xlstoJson = XLSX.utils.sheet_to_json(worksheet)


    //Writing inside a file and saving it
    const write = XLSX.utils.sheet_add_aoa(worksheet,[["Executed"]],{origin:"E3"})
    //Save the workbook
    XLSX.writeFile(workbook,userdatafile)
    console.log(xlstoJson)

for(let c of xlstoJson)
{

test(`Read XLSX file ${c.FirstName} `, async({page})=>
{
   
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.getByPlaceholder("First Name").fill(c.FirstName);
    await page.getByPlaceholder("Last Name").fill(c.LastName)
    //Traverse through the whole excel rows

    //To get one specific cell value

   // console.log(xlstoJson[2].email)

})
}

