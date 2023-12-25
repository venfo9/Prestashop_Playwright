# Playwright Prestashop POM

This project uses the Playwright framework to demonstrate the POM and Auth test by comparing amounts for the E-commerce site (Prestashop). 
Locators and actions are placed in separate classes corresponding to the names of the site pages. Email and password are stored in the config. 
Test flow:
1. Open the site
2. Go to the login page
3. Enter credentials
4. Login
5. Enter the search word in the search field
6. Get the result
7. Switch the good list from grid to the list 
8. Get the amount of the first good (amountFromChooseGoods)
9. Add the first good to the cart
10. Go to the cart
11. Compare the value amountFromChooseGoods with amountFromCart on the cart page

## File Structure

- **Tests.spec.js**: This file includes test scenarios that verify the functionality of the e-commerce application. Each test case is focused on different aspects of the application, such as user login, product selection, and cart management.

- **Cart.js**: The `Cart` class represents the page object model for the shopping cart page. It encapsulates methods and interactions related to managing items in the shopping cart.

- **ChooseGoods.js**: The `ChooseGoods` class represents the page object model for the product selection page. It contains methods for searching, selecting products, and adding them to the cart.

- **Login.js**: The `Login` class represents the page object model for the login page. It encapsulates methods for navigating to the login page, entering user credentials, and performing login actions.

- **FixtureBase.js**: The `FixtureBase` module provides a base configuration for Playwright tests. It includes settings such as viewport size and an event handler for page errors.

- **FixturePages.js**: The `FixturePages` module extends the base configuration and defines fixtures for individual pages (Cart, ChooseGoods, Login). It ensures that each test has access to properly configured instances of these page objects.

## Running Tests

1. Install dependencies: `npm install`
2. Run tests: `npx playwright test tests/Tests.spec.js` 
or only for Chrome browser in headless mode (it's configured in playwright.config.js): 'npx playwright test tests/Tests.spec.js --project chromium'
