const {test,expect} = require("@playwright/test")

//Imports Node.js's built-in File System module, which lets you read/write files from disk.
const fs = require("fs")

//Imports the parse function from the csv-parse library — specifically the synchronous (/sync) version, meaning it reads and
//  processes the whole file in one blocking step, rather than using callbacks or Promises.
const {parse} = require("csv-parse/sync")
//
//const {stringify} = require("csv-stringify/sync");
//const { push } = require("node:stream/iter");

//fs.readFileSync("testdata/testdata.csv") reads the entire CSV file from disk and returns its raw contents (as a Buffer/text).
//parse(...) takes that raw text and converts it into structured JavaScript data — an array of objects, one object per row.
const records = parse(fs.readFileSync("testdata/testdata.csv"),
{
    columns : true,//Tells parse() to treat the first row of the CSV as column headers, and use those header
    skip_empty_lines: true,
})

for(let c of records)
{
test(`Read file form ${c.id}`, async({page})=>
{
  
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.getByPlaceholder("First Name").fill(c.FirstName);
    await page.getByPlaceholder("Last Name").fill(c.LastName)
 
})

}
// //Writing into a file
// test.afterAll(async () => {
//     const csvOutput = stringify(results, { header: true });
//     fs.writeFileSync("testdata/results.csv", csvOutput);
// });