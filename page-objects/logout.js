class Logout{
    constructor(page){
        this.page = page;
        
    }
    
    async ValidLogout(){
        await this.page.locator("//img[@class='img-circle']").click();
        await this.page.locator("//a[@class='dropdown-item'][normalize-space()='Logout']").click();
    
    } 
}
module.exports = Logout;
