// We need to test loader appearance on comments page
import { expect, test } from '@playwright/test';

// 0 Enable browser (view Testing | PLAYWRIGHT | SETTINGS | Show browser)
test('loader test', async ({ page }) => {
  await page.goto('/comments.html');
  // Expect what? How to check loader?
});

test('loader - recording', async ({ page }) => {
  // 1. Find out good precondition for debugging
  await page.goto('/articles.html');

  // 2. Comment problematic action
  // await page.goto('/comments.html');

  // 3. Run test with checked: view Testing | PLAYWRIGHT | SETTINGS | Show browser
  // 4. Place cursor below and do recording: view Testing | PLAYWRIGHT | TOOLS | Record at cursor

  // If not possible to click: load more content (on page use Items/Page and set it to max)
  // Test if test works with default Items count
  // 5. After recording - switch it off
});

test('loader - after recording', async ({ page }) => {
  // await page.goto('/comments.html');
  await page.goto('/articles.html');
  await page.getByTestId('open-comments').click();
  await page.locator('.loader-container').click();
  // 6  Click is not best option, let make the assertion
  // 7  Comment it and make assertion below
});

test('loader - after recording - with assertion', async ({ page }) => {
  await page.goto('/articles.html');
  await page.getByTestId('open-comments').click();
  // await page.locator('.loader-container').click();
  await expect(page.locator('.loader-container')).toBeVisible();
});
