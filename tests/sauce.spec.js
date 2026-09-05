import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";



test('Verify the user is able to log in to sauceDemo website', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(3000)
    await page.fill('#user-name', 'standard_user1')
    await page.waitForTimeout(3000)

    await page.fill('#field2', 'secret_sauce')
    await page.waitForTimeout(3000)

    await page.click('#login-button')
    await page.waitForTimeout(5000)
    expect(await page.locator('span[data-test="title"]')).toHaveText('Products')
    expect(await page.locator('span[data-test="title"]')).toBeVisible()
})

test('Verify the user is not able to log in to sauceDemo website with an invalid username', async ({ page }) => {
    test.setTimeout(5*60*1000)
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(3000)
    
    let username= faker.person.firstName()

    await page.fill('#user-name', username)
    await page.waitForTimeout(3000)

    await page.fill('#password', 'secret_sauce')
    await page.waitForTimeout(3000)

    await page.click('#login-button')
    expect(await page.locator('h3[data-test="error"]')).toBeVisible()
    expect(page.locator('span[data-test="title"]')).not.toBeVisible()
    await page.waitForTimeout(5000)
})