import { expect, test } from "../fixtures/loginFixture";
import { HomePage } from "../Pages/homePage";

test("TC001 @login to application", async ({ mainPage, homePage, page }) => {
    //await mainPage.goToLoginPage();
    //await mainPage.loginToApp();
    //await homePage.getAllProducts();
    await page.locator(('button[name^="add-to-cart"]')).first().click();
//await page.getByRole('link', { name: /1/ });
    await expect(page.locator('.inventory_details_price')).toHaveText('$29.99');
await homePage.logout();
});
