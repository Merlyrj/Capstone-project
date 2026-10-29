const { test, expect } = require("@playwright/test");
const Login = require("../page-objects/login"); //calling the function from another class
const Dashboard = require("../page-objects/dashboard");
const PoManager = require("../page-objects/pomanager");

test ('pageobject model shopping cart application', async ({ page }) => {
    //const login = new Login(page); //object of Login class, used to call its method from another class
    const pomanager=new PoManager(page);//centralised js file, all the objects in
    const login = pomanager.getLogin();
    await login.goto();
    await login.ValidLogin('standard_user', 'secret_sauce');

//const dashboard=new Dashboard(page);
const dashboard = pomanager.getDashboard();
await dashboard.selectProduct("Sauce Labs Backpack");
await dashboard.moveToCart();
}); 