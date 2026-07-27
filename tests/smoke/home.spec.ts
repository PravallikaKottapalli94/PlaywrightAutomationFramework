import { test, expect } from '../../fixtures/baseFixtures';

test("Navigate to Login Page", async ({homePage,page}) => {
    await homePage.navigate()
    await homePage.goToLoginPage();
    await expect(page).toHaveURL(/login/);
})
