import { Page } from '@playwright/test';

export class Login {
    private page: Page;
    private loginLink: string;
    private usernameInput: string;
    private passwordInput: string;
    private loginButton: string;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = "a[class='login']";
        this.usernameInput = "#email";
        this.passwordInput = "#passwd";
        this.loginButton = "#SubmitLogin span";
    }

    async gotoLogin(): Promise<void> {
        await this.page.goto('http://prestashop.qatestlab.com.ua/en/');
    }

    async enterCredentials(username: string, password: string): Promise<void> {
        await this.page.click(this.loginLink);
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
