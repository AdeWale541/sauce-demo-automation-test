import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";
import { test } from "./base";

import LoginPage from "../page/Login";
import DashboardPage from "../page/Dashboard";
import {generateRandomDateValue} from "../helper/function-helper"
import url from "../navigation/url.json"
import { ApiClient } from "../helper/api-client";

// test.beforeAll("",async()=>{
// })

// test.beforeEach("",async()=>{
// })

// test.afterAll("",async({page})=>{    
// })

// test.afterEach("",async()=>{
// })


test.describe('Authorization Tests @authorization', () => {
    test('Verify the standard user is able to log in to sauceDemo website @standard_user',
        {tag: '@valid_login'}, 
        async ({ page }) => {
        let loginPage = new LoginPage(page,expect)
        let dashboardPage = new DashboardPage(page,expect)

        await test.step("Verify user can navigate to the website",async()=>{
            await page.goto('')
        })
        await page.waitForTimeout(1000)

        await test.step("Verify user is on the login page",async()=>{
            await loginPage.pageAssertion()
        })
        
        await test.step("Verify user can login with the username,'standard_user' and password",async()=>{
            await loginPage.login('standard_user', 'secret_sauce')
        })
        await page.waitForTimeout(1000)

        await test.step("Verify user is on the dashboard page after logging in",async()=>{
            await dashboardPage.pageAssertion()
            await dashboardPage.pageAssertion()
        })
        await page.waitForTimeout(5000)
    })

    test('Verify the user is not able to log in to sauceDemo website with an invalid username and valid password',
        {tag: '@invalid_login'}, 
        async ({ page }) => {
        let loginPage = new LoginPage(page,expect)
        let dashboardPage = new DashboardPage(page,expect)
        await page.goto('')
        await page.waitForTimeout(3000)
        //let username = faker.person.firstName()

        await loginPage.pageAssertion()
        let uniqueUsername= `Obinna${generateRandomDateValue()}`
        loginPage.login(uniqueUsername,'secret_sauce')

        await expect(await loginPage.errorModal).toBeVisible()
        await expect(await dashboardPage.productTitleText).not.toBeVisible()
        await page.waitForTimeout(5000)
    })
})

test.describe('Dashboard Tests', {tag:"@dashboard"}, () => {
    test('Verify the standard user is able to filter items from high to low price @high_low_filter', async ({ page }) => {
        // let loginPage = new LoginPage(page,expect)
        let dashboardPage = new DashboardPage(page,expect)
        await page.context().setStorageState("./storageState.json")
        await page.goto(url.dashboard)
        // await page.waitForTimeout(1000)
        // await loginPage.login('standard_user', 'secret_sauce')
        // await page.waitForTimeout(1000)
        await dashboardPage.pageAssertion()
        // await dashboardPage.clickFilterIcon()
        // await dashboardPage.clickHighLowFilter()
        await page.waitForTimeout(5000)
    })

    test('Verify the standard user is able to filter items from low to high price @low_high_filter', async ({ page }) => {
        // let loginPage = new LoginPage(page,expect)
        let dashboardPage = new DashboardPage(page,expect)
        await page.context().setStorageState("./storageState.json")
        await page.goto(url.dashboard)
        // await page.waitForTimeout(1000)
        // await loginPage.login('standard_user', 'secret_sauce')
        // await page.waitForTimeout(1000)
        await dashboardPage.pageAssertion()
        // await dashboardPage.clickFilterIcon()
        // await dashboardPage.clickLowHighFilter()
        await page.waitForTimeout(5000)
    })

    test('Verify the inventory is ordered from A-Z', async ({ page, apiClient }) => {
        let dashboardPage = new DashboardPage(page,expect)
        await test.step("Verify user is able to navigate to the dashboard url",async ()=>{
            await page.context().setStorageState("./storageState.json")
            await page.goto(url.dashboard)
        })
        await test.step("Verify user is on the dashboard page",async ()=>{
            await dashboardPage.pageAssertion()
        })

        await test.step("Verify user is able to get all inventroy text",async ()=>{
            const inventoryText= await dashboardPage.getAllInventoryText()
        })
        
        
        // console.log(inventoryText);
        // expect().toBeTruthy()

        // console.log( await apiClient.getAdminApprovalList());
        
        await page.waitForTimeout(5000)
    })
})


// test.only('Verify the problem user is able to log in to sauceDemo website', async ({ page }) => {
//     let loginPage= new Login(page)
//     let dashboardPage= new Dashboard(page)
//     await page.goto('')
//     await page.waitForTimeout(1000)
//     await loginPage.login('problem_user','secret_sauce')
//     await page.waitForTimeout(1000)
//     expect(dashboardPage.titleTextLocator).toHaveText('Products')
//     expect(dashboardPage.titleTextLocator).toBeVisible()
//     await page.waitForTimeout(5000)
// })

// test('Verify the user is not able to log in to sauceDemo website with an invalid username', async ({ page }) => {
//     test.setTimeout(5*60*1000)
//     await page.goto('https://www.saucedemo.com/')
//     await page.waitForTimeout(3000)
    
//     let username= faker.person.firstName()

//     await page.fill('#user-name', username)
//     await page.waitForTimeout(3000)

//     await page.fill('#password', 'secret_sauce')
//     await page.waitForTimeout(3000)

//     await page.click('#login-button')
//     expect(await page.locator('h3[data-test="error"]')).toBeVisible()
//     expect(await page.locator('span[data-test="title"]')).not.toBeVisible()
//     await page.waitForTimeout(20000)
// })