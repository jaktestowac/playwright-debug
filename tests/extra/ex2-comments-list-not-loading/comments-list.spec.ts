/*
We will test cards what appears on comments page.
Debugging help us to get proper locators and waits
*/

import { expect, test } from '@playwright/test';

// 0 Enable browser (view Testing | PLAYWRIGHT | SETTINGS | Show browser)
test('comments cards recording', async ({ page }) => {
  await page.goto('/comments.html');

  // 1 Record card

  // More about locators you will find in course - Playwright Elements
  // https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA
});

test('comments cards recorded', async ({ page }) => {
  await page.goto('/comments.html');
  await page.locator('.item-card').first().click();
});

test('comments cards count @fail', async ({ page }) => {
  await page.goto('/comments.html');

  // 2 Get count of items and check it
  const count = await page.locator('.item-card').count();
  expect(count).toBe(12);

  // 3 Run test and check if it is working
  // ❌ Should fail
  
  // 4 Place breakpoint at const count
  // Debug test
  // ✅ Should pass

  // 5 run it with Trace Viewer
});

test('comments cards count fixed wait', async ({ page }) => {
  await page.goto('/comments.html');

  // 6 Fixed wait
  await page.waitForTimeout(2000);

  const count = await page.locator('.item-card').count();
  expect(count).toBe(12);
  // 7 Check traces - see waiting time
  // 8 This can be done faster in traces we get cards in around 1s
});

test('comments cards count loader check', async ({ page }) => {
  await page.goto('/comments.html');

  // 9 Add loader check
  await expect(page.locator('.spinner')).toBeInViewport();
  await expect(page.locator('.spinner')).not.toBeInViewport();

  const count = await page.locator('.item-card').count();
  expect(count).toBe(12);
  // 10 Check traces - improved waiting time
});

test('comments cards count dynamic wait', async ({ page }) => {
  await page.goto('/comments.html');

  // 11 Get locator
  const labels = page.locator('.item-card');

  // 12 Dynamically check count
  await expect(labels).toHaveCount(12);

  // 13 Check traces - Log
  // It is useful strategy to check count BEFORE retrieving count
  // const count = await page.locator('.item-card').count();

  // 14 Check traces for negative case i.e. await expect(labels).toHaveCount(13);
});
