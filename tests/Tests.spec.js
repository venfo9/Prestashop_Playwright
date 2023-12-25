// Importing configuration and test fixture from respective modules.
const config = require('../playwright.config.js');
import { test } from '../fixtures/fixturePages';

// Importing 'expect' function from the '@playwright/test' module.
import { expect } from '@playwright/test';

// Defining a test case to compare the quantity of goods on the product list and in the cart.
test('Compare good amount on the product list page and in the cart page', async ({ pages }) => {

    // Login to the application.
    await pages.login.gotoLogin();
    await pages.login.enterCredentials(config.email, config.password);

    // Access the ChooseGoods page.
    await pages.chooseGoods.enterSearchWord("t-shirt");
    await pages.chooseGoods.switchToGrid();

    // Get the quantity of goods on the ChooseGoods page and add them to the cart.
    let amountFromChooseGoods = await pages.chooseGoods.addToCart();
    await pages.chooseGoods.gotoCart();

    // Access the Cart page and get the quantity of goods.
    let amountFromCart = await pages.cart.Cart();

    // Trim leading/trailing whitespaces from the obtained quantities.
    amountFromChooseGoods = amountFromChooseGoods.trim();
    amountFromCart = amountFromCart.trim();

    // Log the obtained quantities to the console.
    console.log('amountFromChooseGoods:', amountFromChooseGoods);
    console.log('amountFromCart:', amountFromCart);

    // Assert that the quantity of goods on the product list is equal to the quantity in the cart.
    expect(amountFromChooseGoods).toBe(amountFromCart);
});
