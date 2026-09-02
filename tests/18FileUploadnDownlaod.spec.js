import {test,expect}  from "@playwright/test"
const Exceljs = require('exceljs');
import path from "path";

test("Upload n Downlaod Popups", async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/upload-download-test/");

    //Event listener for download event

    const downloadPromise = page.waitForEvent('download');
     await page.getByRole('button', { name: 'Download' }).click();
     //wait forr event to complete
    const download = await downloadPromise;
     await page.locator("#fileinput").click();
       await page.locator("#fileinput").setInputFiles("C:/Users/AF17PZZ/Downloads/download (1).xlsx");
})

test("Excel Demo", async({page})=>
{
       await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
       await page.locator("#filesToUpload").
       setInputFiles([("C:\\Users\\AF17PZZ\\Downloads\\Playwright_JS_TS_Course_Content.xlsx"),
              ("C:\\Users\\AF17PZZ\\Downloads\\HCA_WhatsNewReview_26.8.10.0 Release.xlsx")])

              //clearing the fields   after upload
       await  page.locator("#filesToUpload").setInputFiles([])
       //await page.pause()
})

test("Download a file", async({page})=>
{
       await page.goto("https://the-internet.herokuapp.com/download");
        
       //  const [download] = await Promise.all([
                   
       //         page.waitForEvent('download'),
       //         page.getByRole('link', { name: 'input.csv' }).click()
       //  ])

       //  //save here the file to a specific location
       // // await download.saveAs(path.join(__dirname,'Downloads', 'input1.csv'));

       //  await download.saveAs('./Downloads/input2.csv');
//all() -- returns an array of locators
       const dfiles = await page.locator('.example a').all();
       console.log(dfiles);
       for(const files of dfiles.slice(0,3))
       {
              const [downloadPromise] = await Promise.all([
                  
                     page.waitForEvent('download'),
                     files.click()
              ])

              await downloadPromise.saveAs(downloadPromise.suggestedFilename());

                      
       }
})