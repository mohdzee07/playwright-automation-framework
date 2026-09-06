const Exceljs = require('exceljs');
import {test,expect}  from "@playwright/test"

// async function exceldoem()
// {

// //const workbook = new Exceljs.Workbook();
// //await workbook.xlsx.readFile("C:/Users/AF17PZZ/Downloads/excel1.xlsx");
// let output ={
//    row : -1,
//    col :-1
// }

// //create an object of workbook
// const workbook = new Exceljs.Workbook();
// ///read a file
// await workbook.xlsx.readFile("C:\\Users\\AF17PZZ\\Downloads\\file_example_XLSX_10.xlsx")

// //fetch worksheet
//  const worksheet = workbook.getWorksheet('Sheet1')

//  worksheet.eachRow((row,RowNumber)=>
//  {

//       row.eachCell((cell,Columnnumber)=>
//       {
//          if (cell.value === "Magwood")
//          {
//             output.row = RowNumber
//             output.col = Columnnumber
//          }
//       })
//  })

//  //to fetch a value
//  const cell = worksheet.getCell(output.row, output.col)
//  console.log(cell.value)

//  //to write a value

//  const cell1 = worksheet.getCell(output.row, output.col)
//  cell1.value = "India"
//  await workbook.xlsx.writeFile("C:\\Users\\AF17PZZ\\Downloads\\file_example_XLSX_10.xlsx")

// }
// exceldoem()



const {base, expect}=require("@playwright/test")

LoginTest  = base.test.extend({

 Loginverify : async ({browser},use)=>
 {

 }
})
module.exports ={LoginTest}


async function readfile()
{
       const workbook  = new Exceljs.Workbook();
       workbook.xlsx.readFile("");
       const worksheet = workbook.getWorksheet('Sheet1')

       worksheet.eachRow((row,Rownumber)=>
       {
             row.eachcell((col,colmnnumber)=>
            
            {
               
             })
      
       })
      
}