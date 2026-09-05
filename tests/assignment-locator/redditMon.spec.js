import { test } from '@playwright/test';

test('Get comment count from second post on Reddit', async ({ page }) => {
    await page.goto('https://www.reddit.com/');

    const searchBox = page.getByRole('textbox');
    await searchBox.fill('etranzact');
    await searchBox.press('Enter');

    const posts = page.locator('shreddit-post');

    const secondPost = posts.nth(1);

    const commentCount = await secondPost.getAttribute('comment-count');

    console.log('Comment count:', commentCount);
    await page.waitForTimeout(20000)
});