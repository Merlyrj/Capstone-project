class Login{
    constructor(page){
        this.page = page;
        this.username = page.locator("input[placeholder='Username']");
        this.password = page.locator("input[placeholder='Password']");
        this.login = page.locator("button[type='submit']");
    }
    async goto(){
       // await this.page.goto("https://www.saucedemo.com/");
       this.page.goto('/');
    }
    async ValidLogin(userName,passWord){
        await this.username.fill(userName);
        await this.password.fill(passWord);
        await this.login.click();
    
    } 
}
    module.exports = Login;