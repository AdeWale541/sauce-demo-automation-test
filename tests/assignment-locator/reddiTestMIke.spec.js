import { test, expect } from '@playwright/test';
 
test('Validate that user can print out how many comment the second post from the seach has',
 
  async ({ page }) => {
  await page.goto('https://www.reddit.com/?solution=48030d16087e4ec548030d16087e4ec5&js_challenge=1&token=7afd7253fec22262ff1c52b1703fe9ec3c30ff72787431f53b63204e85caee0e&jsc_orig_r=');
 
  await page.locator('textarea[name="q"]').click();
 
  await page.locator('textarea[name="q"]').fill('eTranzact');
 
  await page.locator('textarea[name="q"]').click();
 
  await page.goto('https://www.reddit.com/search/?q=etranzact&cId=43c90dbb-9241-4938-904b-a0bac826d513&iId=3f1bb4b8-4782-4375-92d1-f41461241242%27');
 
const posts = page.locator('[data-testid="search-counter-row"]');
 
console.log(await posts.count());
 
const secondPost = posts.nth(1);
 
console.log(await secondPost.innerText());
 
 const comment = secondPost.locator('faceplate-number').nth(1);
 
console.log('Second post comment count is:  '+await comment.innerText());
});