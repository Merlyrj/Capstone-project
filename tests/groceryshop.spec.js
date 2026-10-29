const { test } = require("@playwright/test");
const PoManager2 = require("../page-objects/pomanager2");
const Dashboard2 = require("../page-objects/dashboard2");
const ManagePage = require("../page-objects/addnew");
const { login } = require("../Utilis/login");
const Manageproduct = require("../page-objects/E2Eproduct");
const Admin = require("../page-objects/adminusers");
const Logout = require("../page-objects/logout");


test ('7mart supermarket cart application', async ({ page }) => {
    
    const PoManager=new PoManager2(page);
    const login = PoManager.getLogin();
    await login.goto();
    await login.ValidLogin('admin', 'admin');

const dashboard=new Dashboard2(page);
await dashboard.clickMoreInfo();
const addnew = new ManagePage(page);
await addnew.createRecord();

}); 


test.describe('utility login',()=>{
    test('login', async ({ page }) => {
        await login("admin", "admin", page);
       // await expect(page).toHaveURL(/inventory/);
       const product=new Manageproduct(page);
       await product.clickMoreInfo1();
       await product.productinfo() ;
       const user = new Admin(page);
       await user.AdminInfo();
       const log = new Logout(page);
       await log.ValidLogout();
    });

})



