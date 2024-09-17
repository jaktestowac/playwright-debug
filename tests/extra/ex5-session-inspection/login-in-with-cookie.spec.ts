/*
We will use session storage to login
*/

import { expect, test } from '@playwright/test';
import { AUTH_PATH } from '../../../playwright.config';

// 1. Use cookie by uncommenting line below
// test.use({ storageState: AUTH_PATH });
test('login to the service with saved cookie', async ({ page }) => {
  // Go directly to welcome page - let's see if we are logged in
  await page.goto('/welcome/');
  await expect(page.getByTestId('hello')).toBeVisible();
});

// 2 Run test with Trace Viewer
// 3 In Traces You can see that Cookie is used in browser.context details as storageState
// 4 Run test again and check token time expiring
