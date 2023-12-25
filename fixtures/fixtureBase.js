// Importing the 'test' function and renaming it to 'base' from the '@playwright/test' module.
const { test: base } = require('@playwright/test');

// Exporting a configuration object for the test suite.
module.exports = {
    // Extending the base test configuration with custom settings.
    test: base.extend({
        // Defining a 'page' fixture that configures the browser page for the test.
        page: async ({ page }, use) => {
            // Setting the viewport size of the browser page to 1920x1080 pixels.
            await page.setViewportSize({ width: 1920, height: 1080 });

            // Adding an event listener for 'pageerror' event to handle errors occurring in the page.
            page.on('pageerror', (error) => {
                console.error('Page error:', error);
                // Uncommenting the line below would throw an error and fail the test on a page error.
                // throw new Error('Console Error');
            });

            // Providing the configured page to the test through the 'use' function.
            await use(page);
        },
    }),
};
