import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { ApiClient } from '../api/ApiClient';

type MyFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    api: ApiClient;
}

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async({ page },use)=>{
        await use(new LoginPage(page));
    },
    productsPage: async({ page },use)=>{
        await use(new ProductsPage(page));
    },
    cartPage: async({ page },use)=>{
        await use(new CartPage(page));

    },
    api: async({request},use)=>{
        await use(new ApiClient(request));
    }
});

export { expect } from '@playwright/test';