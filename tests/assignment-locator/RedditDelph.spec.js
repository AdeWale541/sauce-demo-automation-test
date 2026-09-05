import { test, expect } from '@playwright/test';

test('User can search for Etranzact', async ({ page }) => {
  test.setTimeout(120000)
  // 1. Navigate to the website
  await page.goto('https://www.reddit.com');

  // 2. Enter Search item
 await page.locator('textarea[name="q"]').fill('etranzact');
 await page.keyboard.press('Enter');
 await page.locator('.bg-neutral-background.mx-auto > [consume-events="post/consume/post"]:nth-of-type(2)').click();

 // 4. Get the number of comments
  // const commentCount = await page.locator('[data-post-click-location="comments-button"]').innerText();
   const comment = await page.locator('[data-post-click-location="comments-button"] > span > span > faceplate-number');
   
const commentCount= await comment.innerText();

  
  // 5. Print the result
  console.log(`Second post has ${commentCount} comments`);
  await page.waitForTimeout(20000)
 
});