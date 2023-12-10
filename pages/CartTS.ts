import { Page } from '@playwright/test'; // Предполагается, что Playwright предоставляет тип Page

export class Cart {
    private page: Page;
    private txtUnitPriceAmount: string;
    private UnitPriceAmount: any;
    private amount: string;

    constructor(page: Page) {
        this.page = page;
        this.txtUnitPriceAmount = '#product_price_1_1_0 span';
    }

    async Cart(): Promise<string> {
        this.UnitPriceAmount = await this.page.locator(this.txtUnitPriceAmount);
        this.amount = await this.UnitPriceAmount.textContent();
        return this.amount;
    }

}
