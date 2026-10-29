class Dashboard2{
    constructor(page){
        this.page = page;

        // Manage Page card
        this.managePage = page.locator('.small-box').filter({ hasText: 'Manage Page' });

        // More Info link inside Manage Page
        this.moreInfo = this.managePage.getByRole('link', {name: /more info/i});
    }

    async clickMoreInfo() {
        await this.moreInfo.click();
    }
}

module.exports=Dashboard2;