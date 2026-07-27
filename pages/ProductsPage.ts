import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage{
    private readonly searchTextbox: Locator;
    private readonly searchButton: Locator;
    private readonly closeAdButton: Locator;
    private readonly addToCart : Locator;
    private readonly productAdded : Locator;

    constructor(page:Page){
        super(page);
        this.searchTextbox = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.closeAdButton = page.locator("#dismiss-button");
        this.addToCart = page.locator(".btn.btn-default.add-to-cart").first()
        this.productAdded = page.getByRole("button",{name : "Continue Shopping"})
    }

    async searchProduct(productName:string): Promise<void>{
        await expect(this.searchTextbox).toBeVisible({timeout: 15000});
        await this.fill(this.searchTextbox, productName);
        await this.click(this.searchButton);
    }

    getProduct(productName: string): Locator {
        return this.page.getByText(productName);
    }

   async closeAdvertisementIfPresent(): Promise<void> {
    try {
        await this.closeAdButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.closeAdButton.click();
        console.log("Advertisement closed.");
    } catch {
        console.log("Advertisement not displayed.");
    }
}

    async addProductToCart(): Promise<void> {
        await this.addToCart.click()
    }

    async verifyProductAdded(): Promise<void> {
        await expect(this.productAdded).toBeVisible();
        await this.productAdded.click();
    }

}