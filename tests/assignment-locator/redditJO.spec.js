// const { test, expect } = require('@playwright/test');
 
// const SEARCH_TERM = 'etranzact';
// const RESULTS_TIMEOUT_MS = 30000;
 
// test.use({
//     userAgent:
//         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
//         '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
 
//     viewport: {
//         width: 1440,
//         height: 900,
//     },
 
//     locale: 'en-US',
// });
 
// test(
//     'Reddit: search etranzact, print second post comment count',
//     async ({ page }) => {
 
//         test.setTimeout(120000);
 
 
//         // =====================================================
//         // Test 1 — Open Reddit
//         // =====================================================
 
//         console.log('\n==========================================');
//         console.log('Test 1: OPEN REDDIT');
//         console.log('==========================================');
 
//         try {
 
//             await page.goto('https://www.reddit.com/', {
//                 waitUntil: 'domcontentloaded',
//                 timeout: 90000,
//             });
 
//             console.log('   Reddit opened');
//             console.log('   URL:', page.url());
//             console.log('   Title:', await page.title());
 
//         } catch (error) {
 
//             console.error(
//                 '❌ Failed to open Reddit'
//             );
 
//             console.error(
//                 error.message
//             );
 
//             await page.screenshot({
//                 path: 'error-open-reddit.png',
//                 fullPage: true,
//             });
 
//             throw error;
//         }
 
 
//         // =====================================================
//         // Test 2 — Find search box and enter search term
//         // =====================================================
 
//         console.log('\n==========================================');
//         console.log('Test 2: SEARCH REDDIT');
//         console.log('==========================================');
 
//         try {
 
//             console.log(
//                 '   Waiting for Reddit search input...'
//             );
 
 
//             const searchBox =
//                 page.locator(
//                     'input[name="q"]'
//                 ).first();
 
 
//             await searchBox.waitFor({
//                 state: 'attached',
//                 timeout: 60000,
//             });
 
 
//             console.log(
//                 '   Search input exists in DOM'
//             );
 
 
 
//             await searchBox.waitFor({
//                 state: 'visible',
//                 timeout: 60000,
//             });
 
 
//             console.log(
//                 '   ✅ Search input is visible'
//             );
 
 
//             console.log(
//                 `   Typing "${SEARCH_TERM}"...`
//             );
 
 
//             await searchBox.fill(
//                 SEARCH_TERM
//             );
 
 
//             console.log(
//                 '   Search term entered'
//             );
 
 
//             await searchBox.press(
//                 'Enter'
//             );
 
 
//             console.log(
//                 '   ✅ Search submitted'
//             );
 
//         } catch (error) {
 
//             console.error(
//                 '❌ Failed to locate or use Reddit search input'
//             );
 
//             console.error(
//                 error.message
//             );
 
 
//             console.log(
//                 'Current URL:',
//                 page.url()
//             );
 
//             try {
 
//                 const inputs =
//                     await page
//                         .locator('input')
//                         .evaluateAll(
//                             elements =>
//                                 elements.map(
//                                     (el, index) => ({
//                                         index,
 
//                                         type:
//                                             el.type,
 
//                                         name:
//                                             el.name,
 
//                                         placeholder:
//                                             el.placeholder,
 
//                                         ariaLabel:
//                                             el.getAttribute(
//                                                 'aria-label'
//                                             ),
 
//                                         id:
//                                             el.id,
 
//                                         value:
//                                             el.value,
 
//                                         visible: !!(
//                                             el.offsetWidth ||
//                                             el.offsetHeight ||
//                                             el.getClientRects()
//                                                 .length
//                                         ),
 
//                                         outerHTML:
//                                             el.outerHTML.slice(
//                                                 0,
//                                                 1000
//                                             ),
//                                     })
//                                 )
//                         );
 
 
//                 console.log(
//                     '\n========== REDDIT INPUT DEBUG =========='
//                 );
 
 
//                 console.log(
//                     JSON.stringify(
//                         inputs,
//                         null,
//                         2
//                     )
//                 );
 
//             } catch (debugError) {
 
//                 console.error(
//                     'Could not inspect Reddit inputs:',
//                     debugError.message
//                 );
//             }
 
 
//             await page.screenshot({
//                 path: 'error-search.png',
//                 fullPage: true,
//             });
 
 
//             throw error;
//         }
 
 
//         // =====================================================
//         // Test 3 — Wait for search results
//         // =====================================================
 
//         console.log('\n==========================================');
//         console.log('Test 3: WAIT FOR RESULTS');
//         console.log('==========================================');
 
//         try {
 
//             console.log(
//                 `   Waiting up to ${RESULTS_TIMEOUT_MS / 1000}s for results...`
//             );
 
 
//             await expect
//                 .poll(
//                     async () => {
 
//                         const count =
//                             await page
//                                 .locator(
//                                     '[data-testid="search-counter-row"]'
//                                 )
//                                 .count();
 
 
//                         console.log(
//                             `   Result counter rows: ${count}`
//                         );
 
 
//                         return count;
 
//                     },
//                     {
//                         timeout:
//                             RESULTS_TIMEOUT_MS,
 
//                         intervals: [
//                             1000,
//                             2000,
//                             3000,
//                         ],
 
//                         message:
//                             'Timed out waiting for at least 2 Reddit search results.',
//                     }
//                 )
//                 .toBeGreaterThanOrEqual(2);
 
 
//             console.log(
//                 '   ✅ At least two search results are loaded'
//             );
 
 
//             console.log(
//                 '   Current URL:',
//                 page.url()
//             );
 
//         } catch (error) {
 
//             console.error(
//                 '❌ Search results did not load'
//             );
 
//             console.error(
//                 error.message
//             );
 
 
//             await page.screenshot({
//                 path: 'error-no-results.png',
//                 fullPage: true,
//             });
 
 
//             throw error;
//         }
 
 
//         // =====================================================
//         // STEP 4 — Find second search result
//         // =====================================================
 
//         console.log('\n==========================================');
//         console.log('STEP 4: FIND SECOND RESULT');
//         console.log('==========================================');
 
//         let secondCounterRow;
 
//         try {
 
//             /*
//              * Reddit's search result structure gives us:
//              *
//              * [data-testid="search-counter-row"]
//              *
//              * for each result.
//              */
 
//             const counterRows =
//                 page.locator(
//                     '[data-testid="search-counter-row"]'
//                 );
 
 
//             const resultCount =
//                 await counterRows.count();
 
 
//             console.log(
//                 `   Search result counter rows: ${resultCount}`
//             );
 
 
//             if (resultCount < 2) {
 
//                 throw new Error(
//                     `Expected at least 2 results, found ${resultCount}`
//                 );
//             }
 
 
//             /*
//              * nth(0) = first result
//              * nth(1) = second result
//              */
 
//             secondCounterRow =
//                 counterRows.nth(1);
 
 
//             await secondCounterRow.scrollIntoViewIfNeeded();
 
 
//             console.log(
//                 '   ✅ Second search result located'
//             );
 
//         } catch (error) {
 
//             console.error(
//                 '❌ Could not locate second search result'
//             );
 
//             console.error(
//                 error.message
//             );
 
 
//             await page.screenshot({
//                 path: 'error-second-result.png',
//                 fullPage: true,
//             });
 
 
//             throw error;
//         }
 
 
//         // =====================================================
//         // STEP 5 — Read comment count
//         // =====================================================
 
//         console.log('\n==========================================');
//         console.log('STEP 5: READ COMMENT COUNT');
//         console.log('==========================================');
 
//         let commentCount = null;
 
//         try {
 
//             /*
//              * Example Reddit markup:
//              *
//              * <div data-testid="search-counter-row">
//              *
//              *   <span>
//              *      <faceplate-number number="221">
//              *          221
//              *      </faceplate-number>
//              *      votes
//              *   </span>
//              *
//              *   <span>·</span>
//              *
//              *   <span>
//              *      <faceplate-number number="256">
//              *          256
//              *      </faceplate-number>
//              *      comments
//              *   </span>
//              *
//              * </div>
//              */
 
//             const counterSpans =
//                 secondCounterRow.locator(
//                     ':scope > span'
//                 );
 
 
//             const spanCount =
//                 await counterSpans.count();
 
 
//             console.log(
//                 `   Counter spans: ${spanCount}`
//             );
 
 
//             for (
//                 let i = 0;
//                 i < spanCount;
//                 i++
//             ) {
 
//                 const span =
//                     counterSpans.nth(i);
 
 
//                 const text =
//                     (
//                         await span.innerText()
//                     ).trim();
 
 
//                 console.log(
//                     `   Span ${i}: "${text}"`
//                 );
 
 
//                 /*
//                  * Find the span containing "comments".
//                  */
 
//                 if (
//                     !/comments?/i.test(text)
//                 ) {
//                     continue;
//                 }
 
 
//                 console.log(
//                     '   ✅ Comment counter found'
//                 );
 
 
//                 const numberElement =
//                     span.locator(
//                         'faceplate-number'
//                     ).first();
 
 
//                 const numberElementCount =
//                     await numberElement.count();
 
 
//                 if (
//                     numberElementCount === 0
//                 ) {
 
//                     /*
//                      * Fallback:
//                      *
//                      * Extract number directly from:
//                      *
//                      * "256 comments"
//                      */
 
//                     const match =
//                         text.match(
//                             /([\d.,]+)\s*comments?/i
//                         );
 
 
//                     if (match) {
 
//                         commentCount =
//                             Number(
//                                 match[1]
//                                     .replace(/,/g, '')
//                             );
//                     }
 
 
//                     break;
//                 }
 
 
//                 /*
//                  * Preferred:
//                  *
//                  * <faceplate-number number="256">
//                  */
 
//                 const numberAttribute =
//                     await numberElement.getAttribute(
//                         'number'
//                     );
 
 
//                 if (
//                     numberAttribute !== null
//                 ) {
 
//                     commentCount =
//                         Number(
//                             numberAttribute
//                         );
 
//                 } else {
 
//                     /*
//                      * Fallback to visible text.
//                      */
 
//                     const numberText =
//                         (
//                             await numberElement.innerText()
//                         ).trim();
 
 
//                     commentCount =
//                         Number(
//                             numberText
//                                 .replace(/,/g, '')
//                         );
//                 }
 
 
//                 break;
//             }
 
 
//             // -------------------------------------------------
//             // Validate comment count
//             // -------------------------------------------------
 
//             if (
//                 commentCount === null ||
//                 Number.isNaN(commentCount)
//             ) {
 
//                 console.log(
//                     '\n--- SECOND RESULT COUNTER HTML ---'
//                 );
 
 
//                 const html =
//                     await secondCounterRow.evaluate(
//                         element =>
//                             element.outerHTML
//                     );
 
 
//                 console.log(
//                     html
//                 );
 
 
//                 throw new Error(
//                     'Could not extract comment count from second result.'
//                 );
//             }
 
 
//             console.log(
//                 '   ✅ Comment count extracted'
//             );
 
//         } catch (error) {
 
//             console.error(
//                 '❌ Failed to extract comment count'
//             );
 
//             console.error(
//                 error.message
//             );
 
 
//             await page.screenshot({
//                 path: 'error-comment-count.png',
//                 fullPage: true,
//             });
 
 
//             throw error;
//         }
 
 
//         // =====================================================
//         // STEP 6 — Print final result
//         // =====================================================
 
//         console.log('\n==========================================');
//         console.log('FINAL RESULT');
//         console.log('==========================================');
 
 
//         console.log(
//             `Search term: ${SEARCH_TERM}`
//         );
 
 
//         console.log(
//             `Second post comment count: ${commentCount}`
//         );
 
 
//         console.log(
//             '==========================================\n'
//         );
 
 
//         expect(
//             commentCount
//         ).toBeGreaterThanOrEqual(0);
//     }
// );


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
await page.waitForTimeout(20000)
});