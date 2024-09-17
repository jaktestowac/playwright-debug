// Console log strategies and workers in Playwright Test

import { test } from '@playwright/test';
// 0 Disable all in TESTING -> PLAYWRIGHT -> SETTINGS
// 1 Run the test - what logs says

test.describe('', () => {
  test('Test 1️⃣  console log!', async ({ page }, testInfo) => {
    await page.title();
    console.log('Tested page url:', page.url());

    // 2 Add additional test info to the console log
    // console.log('Test name:', testInfo.title);
    // 3 Pay attention to testInfo object
  });

  test('Test 2️⃣  console log!', async ({ page }, testInfo) => {
    await page.title();
    console.log('Tested page url:', page.url());

    // 2 Add additional test info to the console log
    // console.log('Test name:', testInfo.title);
  });

  // 4 Add another tests and run all tests
  // test('Test 3️⃣  console log!', async ({ page }, testInfo) => {
  //   await page.title();
  //   console.log('Tested page url:', page.url());
  //   console.log('Test name:', testInfo.title);
  // });

  // test('Test 4️⃣  console log!', async ({ page }, testInfo) => {
  //   await page.title();
  //   console.log('Tested page url:', page.url());
  //   console.log('Test name:', testInfo.title);
  // });

  // 5 Is order of the tests the same as in the code?
  // 6 Enable TESTING -> PLAYWRIGHT -> SETTINGS -> Show browser
  // 7 Run the tests and check the order of the tests
  // 8 Check the tooltip in the Show browser option
  // 9 Set workers to 1 in playwright.config.ts
  // 10 Tests should be independent of each other - but it is not always achievable
});
