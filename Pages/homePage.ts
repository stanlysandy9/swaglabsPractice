import { Page, Locator } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly items: Locator;
    readonly productNames: Locator;
    readonly lhsMenu: Locator;
    readonly logOut: Locator;
    readonly cart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.lhsMenu = page.locator('#react-burger-menu-btn');
        this.logOut = page.locator('#logout_sidebar_link');
        this.cart=page.locator('.shopping-cart-link');


        // All items in the shopping page
        this.items = page.locator('.inventory_item');

        // Product title inside each item
        this.productNames = page.locator('.inventory_item_name');
    }

    /**
     * Get all product names from the shopping page
     */
    async getAllProducts(): Promise<string[]> {

        const names = await this.productNames.allTextContents();
        console.log("Available Products:", names);

        return names;
    }

    /**
     * Click first product with partial text match
     */
    async addProductToCart(productText: string): Promise<void> {

        const product = this.items
            .filter({ hasText: productText })
            .first();

        await product.locator('.inventory_item_name').click();
        
    }
    async logout(): Promise<void> {
        await this.lhsMenu.click();
        await this.logOut.waitFor({ state: 'visible' });
        await this.logOut.click();

    }

}