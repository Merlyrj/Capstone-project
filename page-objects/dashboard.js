class Dashboard{
    constructor(page){
        this.page = page;
        this.product = page.locator(".inventory_item_name");
        this.productname = page.locator(".inventory_item");
        this.cart=page.locator(".shopping_cart_link");
        



}
async selectProduct(firstProduct){
await this.product.first().waitFor();
    console.log(await this.product.allTextContents());
    //const productname="Sauce Labs Backpack";
    const count1 = await this.product.count();
    console.log(count1);

    for(let i=0;i<count1;i++){
        if(await this.product.nth(i).textContent()===firstProduct){
            await this.productname.nth(i).locator("text=Add to cart").click();
            break;
        }
        
    } 
}

async moveToCart (){
    await this.cart.click();
}
}    
module.exports=Dashboard;