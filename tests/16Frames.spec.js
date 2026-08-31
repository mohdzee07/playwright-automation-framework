import {test,expect}  from "@playwright/test"

test("Alert Popups", async({page})=>
{

    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-6");
    
     await page.locator(".analystic").nth(1).click();
    
      const frames = await page.frameLocator("[data-testid='practice-iframe']")
      await  frames.getByPlaceholder("type in iframe").fill("Zeeshan")
      await frames.getByRole('button',{name :'Submit'}).click()
      await page.pause();
      locator('[data-testid="practice-iframe"]').contentFrame().getByRole('button', { name: 'Submit' })

//Nested frames
await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette"); 
      const f1 = await page.frameLocator("[src='MultipleFrames.html']").frameLocator("[src='SingleFrame.html']")
      await f1.locator("[type='text']").fill("Shan");
      await expect(f1.locator("[type='text']")).toHaveText|("Shan")

})
