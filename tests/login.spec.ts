import { assert } from "node:console";
import { expect, test } from "../fixtures/loginFixture";
import { HomePage } from "../Pages/homePage";

test("TC001 @login to application", async ({ mainPage, homePage, page, context, browser }) => {
    //await mainPage.goToLoginPage();
    //await mainPage.loginToApp();
    //await homePage.getAllProducts();
    await page.locator(('button[name^="add-to-cart"]')).first().click();
//await page.getByRole('link', { name: /1/ });
    await expect(page.locator('.inventory_details_price')).toHaveText('$29.99');
    const newTab= await context.newPage();
await newTab.goto('https://www.google.com');
await expect(newTab).toHaveTitle("Google");
const pages= context.pages();
await pages[0].bringToFront();
await homePage.logout();

await context.close();

const newContext= await browser.newContext();
const newsession = await newContext.newPage();

await newsession.goto('https://www.google.com');
await newContext.clearCookies();
await newsession.close();


});


