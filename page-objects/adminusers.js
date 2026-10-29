class Admin{
    constructor(page){
        this.page = page;

        this.managePage = page.locator('.small-box').filter({ hasText: 'Admin Users' });
        this.moreInfo = this.managePage.getByRole('link', {name: /more info/i});
        this.newButton = page.locator("//a[@class='btn btn-rounded btn-danger']");
        this.search = page.locator("//a[@class='btn btn-rounded btn-primary']");

    }

    async AdminInfo() {
        await this.page.locator("//a[@class='d-block']").click();
        await this.moreInfo.click();
        await this.newButton.waitFor({ state: 'visible' });
        await this.newButton.click();
        await this.page.locator("#username").fill("mary"); 
        await this.page.locator("#password").fill("mary"); 
        await this.page.locator('select[name="user_type"]').selectOption({ label: "Staff" });
        console.log(await this.page.locator('select[name="user_type"]').inputValue());
        await this.page.locator("//button[@name='Create']").click();   //added
        //await this.page.getByRole('button', { name: 'Create' }).click();
        await this.page.locator("//a[@class='btn btn-rounded btn-warning']").click();   //reset
        await this.search.waitFor({ state: 'visible' });
        await this.search.click();
        await this.page.locator("#un").fill("mary"); 
        await this.page.locator("//button[@name='Search']").click();
        await this.search.waitFor({ state: 'visible' });
        await this.page.locator("//a[@role='button']//i[@class='fas fa-edit']").click();
        await this.page.locator("#username").fill("marys"); 
        await this.page.locator("//button[@name='Update']").click();
        //await this.page.locator("//tbody/tr[1]/td[5]/a[1]/i[1]").click();
        //const alertMessage = this.page.locator("//div[@class='alert alert-success alert-dismissible']");
                  
               // await expect(alertMessage).toBeVisible();
              //  const message = await alertMessage.innerText();
              //  expect(message).toContain("User Updated Successfully");
        
        await this.page.locator("//a[@class='btn btn-rounded btn-warning']").click();
        //await this.search.waitFor({ state: 'visible' });
        //await this.page.locator("//a[@role='button']//i[@class='fas fa-edit']").click();
        await this.search.click();
        await this.page.locator("#un").fill("marys"); 
        await this.page.locator("//button[@name='Search']").click();
        
        // Register the alert handler first
this.page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();
});

// Click the delete icon
await this.page.locator("//i[@class='fas fa-trash-alt']").click();

    
        

    }
}
module.exports = Admin;