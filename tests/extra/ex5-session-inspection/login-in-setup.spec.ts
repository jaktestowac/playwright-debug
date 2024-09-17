/*
We will login as standard user
We will learn how to inspect session storage and local storage
*/
import { expect, Page, test } from '@playwright/test';
import { AUTH_PATH } from '../../../playwright.config';

async function loginInTo(page: Page) {
  // Go to login
  await page.goto('/login/');

  // Enter user data and hit login button
  await page
    .getByPlaceholder('Enter User Email')
    .fill('Moses.Armstrong@Feest.ca');
  await page.getByPlaceholder('Enter Password').fill('test1');
  await page.getByRole('button', { name: 'LogIn' }).click();
}

test('login to the service', async ({ page }) => {
  await loginInTo(page);
  await expect(page.getByTestId('hello')).toBeVisible();
});

// 1 Lets see session storage in Dev Tools
// Go to Application tab
// Check Session Storage
// Check Local Storage
// Check Cookies

// 2 Can I reuse session storage?

/* copy session
 Reload page and find first 200 request
 Click it and check headers
 Find cookie and copy its value
*/

/* paste session
Go to another browser
Open Dev Tools | console
Add code for setting cookie
'paste-here-copied-code'.split(';').forEach(c => document.cookie=c);
hit enter and reload page
*/

// 3 Is session replicated on UI?

// 4 Save session with Playwright
test('login to the service and save cookie', async ({ page }) => {
  await loginInTo(page);
  await expect(page.getByTestId('hello')).toBeVisible();

  // 5 Save cookie - watch the variable for path
  await page.context().storageState({ path: AUTH_PATH });
});
