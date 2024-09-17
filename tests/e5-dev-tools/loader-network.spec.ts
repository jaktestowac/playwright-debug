/*
 We need to test loader showing and hiding on comments page
 Debugging help us to get proper locators
*/
import { expect, test } from '@playwright/test';

test('loader - slow network', async ({ page }) => {
  // 1. In Dev tools: Network -> Throttling -> Slow 3G
  await page.goto('/comments.html');
  await expect(page.locator('.loader-container')).toBeVisible();

  // 2. Check if it works with recording
});

test('loader - slow network - pw simulation', async ({ page }) => {
  // 1. Playwright do not directly this feature - lets try to simulate it
  await page.route('**/*', async (route) => {
    await new Promise((f) => setTimeout(f, 2000));
    await route.continue();
  });

  // 2. Compare network diagram in Chromium and Chrome
  await page.goto('/comments.html');
  await expect(page.locator('.loader-container')).toBeVisible();
});

// Maybe is good to wait till is hidden
test('loader - wait till hidden', async ({ page }) => {
  await page.goto('/comments.html');
  await expect(page.locator('.loader-container')).toBeVisible();

  // 1. Wait till loader is hidden
  await expect(page.locator('.loader-container')).not.toBeVisible();

  // check traces - open page with loader - identify element
  // check its selector
  // test element in chrome console $$('')

  // 2. Playwright object in console
  // playwright.$('.search')
  // playwright.inspect('.search')
});

test('loader - alternative selector', async ({ page }) => {
  await page.goto('/comments.html'); 
  await expect(page.locator('.spinner')).toBeInViewport();
  await expect(page.locator('.spinner')).not.toBeInViewport();
});

