class Login2{
    constructor(page){
        this.page = page;
        this.username = page.locator("input[placeholder='Username']");
        this.password = page.locator("input[placeholder='Password']");
        this.login = page.locator("button[type='submit']");
    }
    async goto(){
       //await this.page.goto("https://groceryapp.uniqassosiates.com/admin");
       await this.page.goto('/admin/login');
       
    }
    async ValidLogin(userName,passWord){
        await this.username.fill(userName);
        await this.password.fill(passWord);
        await this.login.click();
    
    } 
}
    module.exports = Login2;