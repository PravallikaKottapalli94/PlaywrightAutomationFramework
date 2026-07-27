import { test, expect } from '../../fixtures/baseFixtures';
import loginData from '../../config/data/loginData.json';

test('Authenticate User', async ({page,homePage,loginPage}) => {
    await homePage.navigate();
    await homePage.goToLoginPage();

    await loginPage.login(
        loginData.validUser.email,
        loginData.validUser.password
    );

    // Verify login
    await expect(loginPage.isUserLoggedIn).toContainText("Logged in as");

    // Save authenticated session
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});