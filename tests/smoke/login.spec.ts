import {test , expect} from '../../fixtures/baseFixtures'
import loginData from '../../config/data/loginData.json';

test("Valid User Login", async ({ homePage, loginPage }) => {
    await homePage.navigate();
    await homePage.goToLoginPage();

    await loginPage.login(
        loginData.validUser.email,
        loginData.validUser.password
    );

    await expect(loginPage.isUserLoggedIn)
        .toContainText("Logged in as");
});