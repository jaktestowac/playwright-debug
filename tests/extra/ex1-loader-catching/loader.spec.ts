/*
Tracking state between actions (loading and hiding spinner)
Debugging help us what holding spinner on page
*/

import { expect, test } from '@playwright/test';

// 0 Enable browser (view Testing | PLAYWRIGHT | SETTINGS | Show browser)

test('loader - should fail - request between actions logging @fail', async ({
  page,
}) => {
  await page.goto('/comments.html');
  await expect(page.locator('.spinner')).toBeVisible();

  // 1 Print all responses when spinner is visible
  const response = page.waitForResponse(async (response) => {
    console.log(response.status(), response.request().method(), response.url());
    return response.url().includes('xxx'); // this will fail
  });

  // 2 Note what happen when we forget below await! Let test it!
  // Understanding promises is important: more in full Program Playwright
  await response;

  await expect(page.locator('.spinner')).toBeHidden();
});

test('loader - request between actions chosen url', async ({ page }) => {
  // 3 Let's chose url to wait for i.e. api/user

  await page.goto('/comments.html');
  await expect(page.locator('.spinner')).toBeVisible();

  // 4 Print all responses when spinner is visible - wait for api/user hit
  const request = page.waitForResponse(async (response) => {
    console.log(response.status(), response.request().method(), response.url());
    return response.url().includes('api/user');
  });

  await expect(page.locator('.spinner')).toBeHidden();

  await request;
});

/* 5
   Run test with traces
   In traces identify possible requests what stops loader
   Maybe those API calls?
  */

/* 6
  Check the network tab in Dev Tools
  a Jump to Chrome Dev Tools -> Network -> XHR
  b Identify first
  c Block request URL
  d Reload page - Magic!
  */

// 7 Lets do this in Playwright
// full url? localhost:3000/api/comments?_limit=12&_page=1&_sort=date&_order=DESC
// let test some simpler **/api/comments
// those characters after need to be escaped
test('loader - intercept network @fail', async ({ page }) => {
  await page.route('**/api/comments**', async (route) => {
    await route.abort();
  });

  // 8 U can test expression (like above **/api/comments**) in Chrome Dev Tools -> Console -> Block request URL

  await page.goto('/comments.html');
  await expect(page.locator('.spinner')).toBeVisible();
  await expect(page.locator('.spinner')).toBeHidden();

  // 9 Check the traces
  // Is that working in Dev Tools?
  // There is a path but not same as in the Trace Veiwer
  // Performance tab -> Record | Reload page | Stop -> Frames
});
