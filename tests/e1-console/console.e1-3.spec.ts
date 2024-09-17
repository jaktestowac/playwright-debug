// Console log and Playwright hooks
import { test } from '@playwright/test';

// 0 Remove worker settings from the playwright.config.ts
// 0 Disable all TESTING -> PLAYWRIGHT -> SETTINGS
test.describe('', () => {
  // 1 Let use worker index to see how tests are distributed
  test.beforeAll(async ({}, testInfo) => {
    console.log(`🌍 Before all tests ${testInfo.workerIndex}\n`);
  });

  test.beforeEach(async ({}, testInfo) => {
    console.log('🌱 Before each test', testInfo.workerIndex);
  });

  // 2 Using special signs like \n allow us to make new line
  test.afterEach(async ({ page }, testInfo) => {
    console.log('🍂 After each test', testInfo.workerIndex, '\n');
  });

  test.afterAll(async ({}, testInfo) => {
    console.log('🧹 After all tests', testInfo.workerIndex);
  });

  test('Test 1 console log!', async ({ page }, testInfo) => {
    await page.title();
    console.log('1️⃣ ', testInfo.title, testInfo.workerIndex);
  });

  test('Test 2 console log!', async ({ page }, testInfo) => {
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
