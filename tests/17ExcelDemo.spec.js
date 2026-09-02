const Exceljs = require('exceljs');
import {test,expect}  from "@playwright/test"


//Workbook.-->Worksheet -->Row-->Colum-->Cell values
async function execldemo()
{

    let output=
    {
        row : -1,
        column : -1
    }
const workbook = new Exceljs.Workbook();
await workbook.xlsx.readFile("C:/Users/AF17PZZ/Downloads/excel1.xlsx");
const worksheet = workbook.getWorksheet('Sheet1')
//this asct a for loop to iterate to each row
worksheet.eachRow((row,rowNumber)=>
{
    //this is like an inner forloop iterate to each column
    row.eachCell((cell,colNumber)=>
    {

        //fetc each colum value
        //console.log(cell.value)

        if(cell.value ===  "hii")
        {

            //we use the created object to store the row and column number of the cell which has the value "Apple"
            output.row = rowNumber;
            output.column = colNumber;
        }

    })

})

const cell = worksheet.getCell(output.row,output.column) //to fetch a value from a specific cell
console.log(cell.value)

//To insert a value in a specific cell
const cell1 = worksheet.getCell(output.row,output.column)
cell1.value = "Iphone 14"
await workbook.xlsx.writeFile("C:/Users/AF17PZZ/Downloads/excel1.xlsx")
}

execldemo()