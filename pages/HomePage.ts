import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    private readonly signupLoginLink: Locator;
    private readonly productsLink: Locator;
    private readonly cartLink: Locator;

    constructor(page: Page) {
        super(page);
        this.signupLoginLink = page.locator("a[href='/login']");
        this.productsLink = page.locator("a[href='/products']");
        this.cartLink= page.locator("a[href='/view_cart']").first()
    }

    async goToLoginPage(): Promise<void> {
        await this.click(this.signupLoginLink);
    }

    async goToProductsPage(): Promise<void> {
        await this.click(this.productsLink);
    }
    
    async goToCartPage(): Promise<void> {
        await this.click(this.cartLink);
    }
        
}

    
