import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'orangehrm-logo' })).toBeVisible();
  await expect(page.getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link').nth(3)).toBeVisible();
  await expect(page.getByText('Forgot your password?')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.waitForTimeout(5000)
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await expect(page.getByRole('banner')).toContainText('Demo Source');
    await page.waitForTimeout(3000)
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();
      await page.waitForTimeout(3000)
  await page.getByRole('button', { name: ' Add' }).click();
      await page.waitForTimeout(2000)

  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.getByText('Peter Mac Anderson').click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Adewale123');
  await page.getByRole('textbox').nth(3).click();
      await page.waitForTimeout(2000)

  await page.getByRole('textbox').nth(3).fill('Password123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Password123');
      await page.waitForTimeout(3000)

  await page.getByRole('button', { name: 'Save' }).click();
      await page.waitForTimeout(2000)

  await page.getByRole('listitem').filter({ hasText: 'Demo Source' }).locator('i').click();
      await page.waitForTimeout(2000)

  await page.getByRole('menuitem', { name: 'Logout' }).click();
        await page.waitForTimeout(2000)

  await expect(page.getByRole('heading')).toContainText('Login');
        await page.waitForTimeout(5000)

});