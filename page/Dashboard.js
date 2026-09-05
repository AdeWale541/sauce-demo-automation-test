export default class DashboardPage{

    /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').Expect} expect
   */
  

    constructor(page,expect){
        this.page= page
        this.expect= expect
        this.productTitleText= page.locator('span[data-test="title"]')
        this.cartIcon=page.locator('.shopping_cart_link')
        this.filterIcon= page.locator('.select_container')//page.locator('.product_sort_container')
        this.highLowFilter= page.locator("option[value='hilo']")
        this.lowHighFilter= page.locator("option[value='lohi']")   
        this.inventoryTexts= page.locator(".inventory_item_name")     
    }

    async pageAssertion(){
        await this.expect.soft(this.productTitleText).toBeVisible()
        await this.expect.soft(this.productTitleText).toHaveText('Products')
        await this.expect(this.cartIcon).toBeVisible()
    }

    async clickFilterIcon(){
        await this.filterIcon.click()
    }

    async clickHighLowFilter(){
        await this.highLowFilter.click()
    }

    async clickLowHighFilter(){
        await this.lowHighFilter.click()
    }

    async getAllInventoryText(){
       const inventoryTexts= await this.inventoryTexts.allTextContents()
       return inventoryTexts
    }
}