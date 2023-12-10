This project uses the Playwright framework to demonstrate POM and Auth test with comparing amounts for the E-commerce site (Prestashop). 
Locators and actions are placed in separate classes corresponding to the names of the site pages. Email and password are stored in the config. 
Test flow:
1. Open the site
2. Go to login page
3. Enter credentials
4. Login
5. Enter search word in the search field
6. Get the result
7. Switch good list fro grid to the list 
8. Get the amount of the first good (amountFromChooseGoods)
9. Add the first good to the cart
10. Go to the cart
11. Compare value amountFromChooseGoods with amountFromCart on the cart page
