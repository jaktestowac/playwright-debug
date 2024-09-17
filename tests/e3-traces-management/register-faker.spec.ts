// See traces with exercise about fake data
import { faker } from '@faker-js/faker/locale/zh_CN';
import { expect, test } from '@playwright/test';

// 0 Enable traces (view Testing | PLAYWRIGHT | SETTINGS | Show trace viewer)

test('register user with faker @fail', async ({ page }) => {

// 1 Run test
// 2 After running test see proposed command: npx playwright show-trace test-results\e3..
// 3 Run command in terminal (alternative is to use plugin in VSCode)
  const userData = {
    email: faker.internet.email(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    password: faker.internet.password(),
    avatar: faker.image.avatar(),
  };

  await page.goto('/register.html');

  await page.getByTestId('firstname-input').fill(userData.firstname);
  await page.getByTestId('lastname-input').fill(userData.lastname);
  await page.getByTestId('email-input').fill(userData.email);
  await page.getByTestId('password-input').fill(userData.password);
  await page.getByTestId('register-button').click();

  // Assert
  await expect(page.getByTestId('alert-popup')).toContainText('User created');
});

// 3. Check folder test-results and identify test with traces
// 4. Copy path to trace.zip
// 5. Open traces - here are methods to check:
//   - npx playwright show-report
//   - npx playwright show-trace test-results\ex6-traces-management-register-faker-register-user-faker-chromium\trace.zip
//   - use Playwright Helpers plugin
//   - drop zip on https://trace.playwright.dev/
// Zip can be sent or attached to issue

// 6. The cause of the failure is in Faker import (we learn this in Program Playwright)