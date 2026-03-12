import { test as base, Page } from '@playwright/test';
import { MainPage } from '../Pages/mainPage';
import { HomePage } from '../Pages/homePage';
import { homedir } from 'node:os';


type fixtures = {
    mainPage: MainPage;
    homePage: HomePage;
   //logOut: HomePage;

};

export const test = base.extend<fixtures>({

    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.goToLoginPage();
        await mainPage.loginToApp();
        await use(mainPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.getAllProducts();
        await homePage.addProductToCart("Backpack");
        await use(homePage);

    }
    /**logOut: async ({ page }, use) => {
       const homePage = new HomePage(page);
       await homePage.logout();
       await use(homePage);

    }*/



});
export { expect } from '@playwright/test';