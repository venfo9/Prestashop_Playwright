// Importing individual page classes (Cart, ChooseGoods, Login) and the 'test' function from respective modules.
import { Cart } from '../pages/Cart';
import { ChooseGoods } from '../pages/ChooseGoods';
import { Login } from '../pages/Login';
import { test as base } from './fixtureBase';

// Exporting a configuration object for the test suite.
export const test = base.extend({
    // Defining a 'pages' fixture that configures instances of different page classes for the test.
    pages: ({ page }, use) => {
        // Creating an object 'pages' with instances of page classes, passing the current browser page.
        const pages = {
            cart: new Cart(page),
            chooseGoods: new ChooseGoods(page),
            login: new Login(page),
            // Add other pages as needed.
        };
        // Providing the configured 'pages' object to the test through the 'use' function.
        use(pages);
    },
});
