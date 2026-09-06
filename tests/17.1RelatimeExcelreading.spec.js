const ExcelJS = require('exceljs');

async function getLoginData() {

    const workbook =new ExcelJS.Workbook();

    await workbook.xlsx.readFile("C:/Users/AF17PZZ/Downloads/LoginData.xlsx");

    const worksheet =workbook.getWorksheet('Sheet1');

    let users = [];

    worksheet.eachRow((row, rowNumber) => {

        if (rowNumber > 1) {

            users.push({
                url:row.getCell(1).value,

                username: row.getCell(2).value,

                password:row.getCell(3).value

            });

        }

    });

    console.log(users);
}

getLoginData();