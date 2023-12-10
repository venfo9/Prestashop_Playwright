import { Page } from '@playwright/test';

export class ChooseGoods {
    private page: Page;
    private searchField: string;
    private btnswitchToGrid: string;
    private txtamountOfGood: string;
    private btnAddToCart: string;
    private btnProceedToCheckout: string;
    private amount: string;

    constructor(page: Page) {
        this.page = page;
        this.searchField = "//*[@id='search_query_top']";
        this.btnswitchToGrid = "//body/div[@id='page']/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/ul[1]/li[3]/a[1]/i[1]";
        this.txtamountOfGood = '//*[@id="center_column"]/ul/li[1]/div/div/div[3]/div/div[1]/span';
        this.btnAddToCart = '//span[contains(text(),\'Add to cart\')]';
        this.btnProceedToCheckout = '//a[contains(@title, \'Proceed\')]';
    }

    async enterSearchWord(searchWord: string): Promise<void> {
        await this.page.fill(this.searchField, searchWord);
        await this.page.keyboard.press('Enter');
    }

    async switchToGrid(): Promise<void> {
        await this.page.click(this.btnswitchToGrid);
    }

    async addToCart(): Promise<string> {
        const amountElement = await this.page.locator(this.txtamountOfGood);
        this.amount = await amountElement.textContent();
        await this.page.click(this.btnAddToCart);
        return this.amount; // Return the amount value
    }

    async gotoCart(): Promise<void> {
        await this.page.click(this.btnProceedToCheckout);
    }
}


