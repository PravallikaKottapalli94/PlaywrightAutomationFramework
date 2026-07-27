import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly emailTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;
    private readonly loggedInUserText: Locator;
    
    constructor (page:Page){
        super(page);
        this.emailTextbox = page.locator("[data-qa='login-email']");
        this.passwordTextbox = page.locator("[data-qa='login-password']");
        this.loginButton = page.locator("[data-qa='login-button']");
        this.loggedInUserText = page.locator("a:has(i.fa-user)")
    }

    async login(email: string,password: string): Promise<void>{
        await this.fill(this.emailTextbox, email);
        await this.fill(this.passwordTextbox, password);
        await this.click(this.loginButton);
    }

    get isUserLoggedIn(): Locator {
        return this.loggedInUserText;
    }

 
}
