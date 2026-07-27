import { Locator, Page } from '@playwright/test';
import { ConfigManager } from '../utils/ConfigManager';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    async fill(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    async navigate(path: string = ''): Promise<void> {
        await this.page.goto(`${ConfigManager.baseURL}${path}`);
    }

    async waitForVisible(locator: Locator): Promise<void> {
        await locator.waitFor({state : 'visible'});
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }


}