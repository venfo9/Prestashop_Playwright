exports.Login = class Login {

    constructor(page) {
        this.page = page
        this.loginLink = "a[class='login']"
        this.usernameInput = "#email"
        this.passwordInput = "#passwd"
        this.loginButton = "#SubmitLogin span"
    }

    async gotoLogin() {
        await this.page.goto('http://prestashop.qatestlab.com.ua/en/')
    }

    async enterCredentials(username, password) {
        await this.page.click(this.loginLink)
        await this.page.fill(this.usernameInput, username)
        await this.page.fill(this.passwordInput, password)
        await this.page.click(this.loginButton)
    }
}