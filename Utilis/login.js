export async function login(username,password,page){
    await page.goto("https://groceryapp.uniqassosiates.com/admin");
    await page.fill("//input[@placeholder='Username']", username);
    await page.fill("//input[@placeholder='Password']", password);
    await page.click("//button[@type='submit']");
}