import { test } from '@playwright/test';
import LoginPage from '../page/Login';
import config from '../config/config';

test('Global Login', async ({ page }) => {
    let loginPage = new LoginPage(page)
    console.log("In Global Tests ");
    console.log("Current Environment: ",config.ENVIRONMENT);
    console.log("Current baseUrl: ",config.BASE_URL);
    console.log("Admin Password: ",config.ADMIN_PASSWORD);

    await test.step("Verify user can navigate to the website", async () => {
        await page.goto('')
    })
    await page.waitForTimeout(1000)

    await test.step("Verify user can login with the username,'standard_user' and password", async () => {
        await loginPage.login('standard_user', config.ADMIN_PASSWORD)
    })
    await page.waitForTimeout(1000)

    await page.context().storageState({path:"./storageState.json"})

});

