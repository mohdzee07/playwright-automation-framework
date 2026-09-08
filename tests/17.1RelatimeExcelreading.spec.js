const ExcelJS = require('exceljs');

async function getLoginData() {

    const workbook =new ExcelJS.Workbook();

    await workbook.xlsx.readFile("C:/Users/AF17PZZ/Downloads/exceldata.xlsx");

    const worksheet =workbook.getWorksheet('Sheet1');

    let users = [];

    worksheet.eachRow((row, rowNumber) => {

        if (rowNumber > 1) {

            users.push({
                FirstName:row.getCell(1).value,

                LastName: row.getCell(2).value,

                email:row.getCell(3).value

            });

        }

    });

    console.log(users);
}

getLoginData();