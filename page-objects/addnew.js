class ManagePage {
    constructor(page) {
        this.page = page;
        this.newButton = page.locator("//a[@class='btn btn-rounded btn-danger']");
    }

     async createRecord() {
        await this.newButton.waitFor({ state: 'visible' });
        await this.newButton.click();

        // Verify navigation to the Add Page form
        await this.page.waitForURL('**/admin/pages/add');
        await this.page.locator("#title").fill("Test data");
        //await this.page.locator(".description").fill("Test descrip");
        await this.page.locator("#page").fill("Test page");
        const filePath = "C:/Users/rasin/Downloads/screenshot.png";
        await this.page.locator("#main_img").setInputFiles(filePath);
        //await page.locator('#terms').check();
        await this.page.locator("//button[@name='create']").click();
        //await expect(page.locator('//li[normalize-space()')).toContainText('Image does not have a valid mime type.');
    

        

    }
}

module.exports = ManagePage;