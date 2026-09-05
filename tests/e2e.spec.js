import { test, expect } from "@playwright/test";


test.describe('Verify E2E Purchase with standard user', () => {
    test('should first', async ({ page }) => {
        let loginPage = new LoginPage(page)
        let dashboardPage = new DashboardPage(page)
        await page.goto('')
        await page.waitForTimeout(1000)
        await loginPage.login('standard_user', 'secret_sauce')
        await page.waitForTimeout(1000)
        expect(dashboardPage.titleTextLocator).toHaveText('Products')
        expect(dashboardPage.titleTextLocator).toBeVisible()
        await dashboardPage.addToCart(postion)


        await page.waitForTimeout(5000)

        // Login // Dashboard - Cart - Checkout - Overview - Completion - Home - Logout - Login

    })
})

test.describe('Verify E2E Purchase with problem user', ()=>{
    test('should first', async({page}) => {
        

    })
})

