import { test } from "@playwright/test";

test("Get comment count from second Reddit post", async ({ page }) => {
  test.setTimeout(300000)
  await page.goto("https://www.reddit.com/");

  await page.getByRole("textbox").fill("etranzact");
  await page.getByRole("textbox").press("Enter");

  const posts = page.locator("shreddit-post");

  const commentCount = await posts.nth(1).getAttribute("comment-count");
  await page.waitForTimeout(50000)

  console.log("Comment count:", commentCount);
});