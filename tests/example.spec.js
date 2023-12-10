// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

test('get started link', async ({ page }) => {
  await page.goto('https://stackoverflow.com/');
  //await page.locator("a[class='login']").click()
  await page.getByRole('menuitem', { name: 'Log in' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('spdgavo910@ipahive.org');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('1234qwer');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.waitForTimeout(5000); // 5000 milliseconds (5 seconds)
});
