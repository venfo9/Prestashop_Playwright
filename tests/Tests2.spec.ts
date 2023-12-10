const config = require('../playwright.config.js');

import {test, expect} from '@playwright/test'
import {Login} from '../pages/LoginTS'
import {ChooseGoods} from '../pages/ChooseGoodsTS'
import {Cart} from '../pages/CartTS'


test('Compare good amount on good list page and in the cart page', async ({page}) => {
    //Login
    const login = new Login(page)
    await login.gotoLogin()
    await login.enterCredentials(config.email, config.password)

    //ChooseGoods
    const chooseGoods = new ChooseGoods(page)
    await chooseGoods.enterSearchWord("t-shirt")
    await chooseGoods.switchToGrid()
    let amountFromChooseGoods = await chooseGoods.addToCart();
    await chooseGoods.gotoCart()

    //Cart
    const cart = new Cart(page)
    let amountFromCart = await cart.Cart();


    // Expectation
    amountFromChooseGoods = amountFromChooseGoods.trim();
    amountFromCart = amountFromCart.trim();
    console.log('amountFromChooseGoods:', amountFromChooseGoods);
    console.log('amountFromCart:', amountFromCart);

    expect(amountFromChooseGoods).toBe(amountFromCart);
});