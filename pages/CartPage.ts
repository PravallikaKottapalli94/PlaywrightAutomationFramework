import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage'

export class CartPage extends BasePage{
    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly productQuantity: Locator;
    private readonly cartTotal: Locator;
    private readonly cartDelete: Locator;
    private readonly cartEmptyText: Locator;
    constructor(page:Page){
        super(page);

        this.productName = page.locator('.cart_description a');
        this.productPrice = page.locator('.cart_price p');
        this.productQuantity = page.locator('.cart_quantity button');
        this.cartTotal = page.locator('.cart_total_price');
        this.cartDelete = page.locator('.cart_quantity_delete');
        this.cartEmptyText = page.getByText("Cart is empty!")
    }

    getProductName(): Locator{
        return this.productName;
    }

    getProductPrice(): Locator{
        return this.productPrice;
    }

    getProductQuantity():Locator{
        return this.productQuantity;
    }

    getCartTotal():Locator{
        return this.cartTotal;
    }

    async deleteProductFromCart(): Promise<void> {
        await this.cartDelete.click()
    }

    getCartEmpty():Locator{
        return this.cartEmptyText;
    }
}