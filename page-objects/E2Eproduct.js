const { expect } = require("@playwright/test");

class Manageproduct{
    constructor(page){
        this.page = page;
        this.managePage = page.locator('.small-box').filter({ hasText: 'Manage Product' });
        this.moreInfo = this.managePage.getByRole('link', {name: /more info/i});
    }

    async clickMoreInfo1() {
        await this.moreInfo.click();
    }

    async productinfo() {
         this.newButton = this.page.locator("//a[@class='btn btn-rounded btn-danger']");
        await this.newButton.click();
        await this.page.locator("#title").fill("Test data");
        await this.page.locator("//input[@value='Others']").check();
        await this.page.locator("#cat_id").selectOption({ label :'Fruits'});
        console.log("SelectByValue", await this.page.locator("#cat_id").inputValue());
        //await this.page.locator("#sub_id").selectOption({ label :'Fresh Fruits'});
        //console.log("SelectByValue", await this.page.locator("#sub_id").inputValue());
        await this.page.locator('select[name="sub_id"]').selectOption({ label: "Fresh Fruits" });
        console.log(await this.page.locator('select[name="sub_id"]').inputValue());
        await this.page.locator("#m_weight").fill("10");
        //await this.page.locator("#w_unit").selectOption({ label:'g'});
        //console.log("SelectByValue", await this.page.locator("#sub_id").inputValue());
        await this.page.locator('select[name="w_unit"]').selectOption({ label: "g" });
        console.log(await this.page.locator('select[name="w_unit"]').inputValue());
        await this.page.locator("#max_weight").fill("5");
        await this.page.locator("#w_price").fill("15");
        await this.page.locator("#w_stock").fill("5");
        await this.page.locator("//button[@name='create']").click();
        
        const alertMessage = this.page.locator("div.alert.alert-success");
          // Verify the alert is visible
        await expect(alertMessage).toBeVisible();
        const message = await alertMessage.innerText();
        console.log("Alert message:", message);
        expect(message).toContain("Product Created Successfully");

    }
        



}

module.exports=Manageproduct;