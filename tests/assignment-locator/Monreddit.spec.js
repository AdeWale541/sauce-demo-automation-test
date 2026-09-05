import { test } from '@playwright/test';

test('Get comment count from second post on Reddit', async ({ page }) => {
    await page.goto('https://www.reddit.com/');

    const searchBox = page.locator('textarea[name="q"]');

    await searchBox.fill('etranzact');
    await searchBox.press('Enter');

    const posts = page.locator('[data-testid="search-counter-row"]');

    const secondPost = posts.nth(1);

    const comment = secondPost.locator('faceplate-number').nth(1);

    console.log('Comment count:', await comment.innerText());
    await page.waitForTimeout(20000)
});