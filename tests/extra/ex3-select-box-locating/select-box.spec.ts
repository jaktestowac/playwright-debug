/*
Get the value of select box Items/Page
And compare it to the number of items on the page
How debugging can help with hard to extract values
*/
import { expect, test } from '@playwright/test';

test('comments list get select value record', async ({ page }) => {
  await page.goto('/comments.html');
  const labels = page.locator('.item-card');

  // 1 Record select value
  // Use different options:
  // Standard select?
  // Pick locator?
  // Assert visibility?
  // Assert element contains text?
  // Assert value?

  await expect(labels).toHaveCount(12);
});

test('comments list get select value recorded', async ({ page }) => {
  await page.goto('/comments.html');
  const labels = page.locator('.item-card');

  // 2 Recorded select value
  await expect(page.getByTestId('per-page-select')).toBeVisible();
  await expect(page.getByTestId('per-page-select')).toContainText(
    '6 12 24 48 96 192 384'
  );
  // 3 We can check value BUT we want to retrieve it
  await expect(page.getByTestId('per-page-select')).toHaveValue('12');

  await expect(labels).toHaveCount(12);
});

test('comments list get select value html', async ({ page }) => {
  await page.goto('/comments.html');
  const labels = page.locator('.item-card');

  // 4 Assign locator to const
  const selectValue = page.getByTestId('per-page-select');

  // We assume that await selectValue.value() will not work
  // 5 Open dev tools and check options html
  // 6 Copy element html to select.html - we will use it in Debug mode
  const selectedOptionHtml = await selectValue.innerHTML();

  // 7 Add breakpoint here
  await expect(labels).toHaveCount(12);

  // 8 Debug test
  // 9 Copy html to select.html
  // 10 Format it 
  // 11 Test ideas for locator in dev tools:
  //    Copy computed selectValue selector in []
  //    Test it in dev tools $$('copied selector')
  //    [data-testid="per-page-select"]
  //    Add distinct class form select.html in Dev Tools selector []
  //    [data-testid="per-page-select"] [selected]
  // Works!!!
});

test('comments list get select value element', async ({ page }) => {
  await page.goto('/comments.html');
  const labels = page.locator('.item-card');

  // 12 Make proper locator
  const selectValue = page.getByTestId('per-page-select').locator('[selected]');

  // 13 Assert it with selectValue content
  // How to do that?
  // await expect(labels).toHaveCount(selectValue);
});

test('comments list get select value asserting', async ({ page }) => {
  await page.goto('/comments.html');
  const labels = page.locator('.item-card');
  const selectValue = page.getByTestId('per-page-select').locator('[selected]');

  // 14 Get textContent()
  const selectValueText = await selectValue.textContent();

  // 15 Assert will not work - we need to convert it to number
  // await expect(labels).toHaveCount(selectValueText);
  await expect(labels).toHaveCount(Number(selectValueText));
});
