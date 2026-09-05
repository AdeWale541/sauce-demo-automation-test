import { test } from '@playwright/test';
import LoginPage from '../page/Login';

test('Global Login', async ({ page }) => {
    let loginPage = new LoginPage(page)

    await test.step("Verify user can navigate to the website", async () => {
        await page.goto('')
    })
    await page.waitForTimeout(1000)

    await test.step("Verify user can login with the username,'standard_user' and password", async () => {
        await loginPage.login('standard_user', 'secret_sauce')
    })
    await page.waitForTimeout(1000)

    await page.context().storageState({path:"./storageState.json"})

});

