/*
We will try to catch alert on flashposts page
Debugging will help us to get proper locators
*/

import { expect, test } from '@playwright/test';
import fs from 'fs';

test('problematic alert', async ({ page }) => {
  await page.goto('/flashposts.html');
  await page.getByRole('button', { name: 'Create Flashpost' }).click();
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  // How to check alert?
});

// 1 Record test
test('problematic alert - for recording', async ({ page }) => {
  await page.goto('/flashposts.html');
  await page.getByRole('button', { name: 'Create Flashpost' }).click();
  // 2 Comment problematic action
  // await page.getByRole('button', { name: 'Create', exact: true }).click();

  // 3 Run test with checked: view Testing | PLAYWRIGHT | SETTINGS | Show browser
  // 4 Place cursor below and do recording: view Testing | PLAYWRIGHT | TOOLS | Record at cursor
  // 5 Clicking alert will not be recorded? Maybe use Assert Visibility?
});

test('problematic alert - after recording', async ({ page }) => {
  await page.goto('/flashposts.html');
  await page.getByRole('button', { name: 'Create Flashpost' }).click();
  await page.getByRole('button', { name: 'Create', exact: true }).click();

  await expect(page.locator('.overlay')).toBeVisible();
});

// 6 Run it in UI Mode - verify how to locate it
// 7 Check After state with alert
// Locate element what is clicked in Dev Tools
// What element overlay alert, what element is not overlaid?
// If we get rid of overlaying element we can click on alert?
test('problematic alert - after recording with improvement', async ({
  page,
}) => {
  await page.goto('/flashposts.html');
  await page.getByRole('button', { name: 'Create Flashpost' }).click();

  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByTestId('dti-simple-alert').click();
});

test('problematic alert - check HTML @fail', async ({ page }) => {
  await page.goto('/flashposts.html');
  await page.getByRole('button', { name: 'Create Flashpost' }).click();

  // 8 Get full HTML before and after action
  const htmlBeforeAction = await page.content();
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  const htmlAfterAction = await page.content();

  // 9 Compare HTML
  expect(htmlAfterAction).toEqual(htmlBeforeAction);
});

test('problematic alert - check HTML as diff', async ({ page }) => {
  await page.goto('/flashposts.html');
  await page.getByRole('button', { name: 'Create Flashpost' }).click();

  const htmlBeforeAction = await page.content();
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  const htmlAfterAction = await page.content();

  // 10 Save HTML to files
  fs.writeFileSync(
    './tests/extra/ex4-problematic-alert/htmlBeforeAction.html',
    htmlBeforeAction
  );
  fs.writeFileSync(
    './tests/extra/ex4-problematic-alert/htmlAfterAction.html',
    htmlAfterAction
  );
});
// 11 Compare produced files and find locator for alert
// Open options for htmlBeforeAction.html | Select for Compare
// Open options for htmlAfterAction.html | Compare with Selected

test('problematic alert - check it', async ({ page }) => {
  await page.goto('/flashposts.html');
  await page.getByRole('button', { name: 'Create Flashpost' }).click();
  await page.getByRole('button', { name: 'Create', exact: true }).click();

  // 12 Check if alert is visible
  await expect(page.getByTestId('dti-simple-alert')).toBeVisible();
});
