export default class LoginPage{

    /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').Expect} expect
   */
  

    constructor(page,expect= null){
        this.page= page
        this.expect = expect
        this.swagTitle= page.locator('.login_logo')
        this.userNameField= page.locator('#user-name')
        this.passwordField= page.locator('#password')
        this.loginBtn= page.locator('#login-button')
        this. errorModal = page.locator('h3[data-test="error"]')
    }

    async pageAssertion(){
        await this.expect(this.userNameField).toBeVisible()
        await this.expect(this.passwordField).toBeVisible()
        await this.expect(this.loginBtn).toBeVisible()
        await this.expect.soft(this.swagTitle).toBeVisible()
    }

    async login(username, password) {
        await this.userNameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginBtn.click()
    }

    async enterUsername(username) {
        await this.userNameField.fill(username)
    }
    async enterPassword(password) {
        await this.passwordField.fill(password)
    }
    async clickLoginButton() {
        await this.loginBtn.click()
    }
}