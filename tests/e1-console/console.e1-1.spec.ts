// Let us start with simple console log in the test
import { test } from '@playwright/test';

// 1 No ▶️ at the left side of the test?
// 1 check plugin and config, reload tests

test('Test 1 console log!', async ({ page }) => {
  await page.title();
  // 2 Simple console log - how it appears in the terminal?
  // console.log('Test console log!');

  // 3 Console log with additional icon
  // console.log("🔴 Test console log!");

  // 3 Console log with additional info an context
  // console.log(page.url());
  // console.log('Tested page url:', page.url());

  // 4 Console log with alternative info
  // console.log(`Tested page url: ${page.url()}`);
});
