import { Locator, Page } from "@playwright/test";
import {config as dotenvConfig} from 'dotenv';
dotenvConfig();


export class MainPage {
readonly page: Page;
readonly userNameInput: Locator;
readonly passwordInput: Locator;
readonly loginButton:Locator;

private readonly userName: string;
private readonly password: string;

constructor (page:Page){
    this.page=page;
    this.userNameInput=page.locator("id=user-name");
    this.passwordInput=page.locator('id=password');
    this.loginButton=page.locator("#login-button");
    this.userName=process.env.USERNAMEE || '';
    this.password=process.env.PASSWORD || '';


}
 async goToLoginPage(): Promise<void> {
       
        await this.page.goto("/", { waitUntil: 'networkidle' });
    }

    async loginToApp(): Promise<void> {
        await this.userNameInput.fill(this.userName);
        await this.passwordInput.fill(this.password);
        await this.loginButton.click();
    }
}




