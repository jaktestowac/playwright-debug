// Playing with debug in Playwright Test with Visual Studio Code Plugin
import { test } from '@playwright/test';

// 0 Remove worker settings from the playwright.config.ts
// 0 Disable all TESTING -> PLAYWRIGHT -> SETTINGS
// 0 No breakpoints in this file
test.describe('', () => {
  test.beforeAll(async ({}, testInfo) => {
    // 1 place breakpoint 2 lines below | run debug test | see the workerIndex
    // 2 watch i.e. test name testInfo.title
    console.log(`🌍 Before all tests ${testInfo.workerIndex}\n`);
    // 3 use step over, step out and play buttons
    // 4 where logs are displayed? DEBUG CONSOLE
  });

  test.beforeEach(async ({}, testInfo) => {
    console.log('🌱 Before each test', testInfo.workerIndex);
  });

  test.afterEach(async ({ page }, testInfo) => {
    // 8 place breakpoint in line below | observe watch variables
    console.log('🍂 After each test', testInfo.workerIndex, '\n');
  });

  test.afterAll(async ({}, testInfo) => {
    console.log('🧹 After all tests', testInfo.workerIndex);
  });

  test('Test 1 console log!', async ({ page }, testInfo) => {
    // 5 place breakpoint 2 lines below on await page.title();
    // 6 try now Play button if lost in code
    await page.title();
    console.log('1️⃣ ', testInfo.title, testInfo.workerIndex);
    // 7 inspect DEBUG CONSOLE - execute console.log() or new Date()
  });

  test('Test 2 console log!', async ({ page }, testInfo) => {
    // 5 place breakpoint 2 lines below on await page.title();
    // 6 try now Play button if lost in code
    await page.title();
    console.log('2️⃣ ', testInfo.title, testInfo.workerIndex);
  });

  test('Test 3 console log!', async ({ page }, testInfo) => {
    await page.title();
    console.log('3️⃣ ', testInfo.title, testInfo.workerIndex);
  });

  test('Test 4 console log!', async ({ page }, testInfo) => {
    await page.title();
    console.log('4️⃣ ', testInfo.title, testInfo.workerIndex);
  });
});
