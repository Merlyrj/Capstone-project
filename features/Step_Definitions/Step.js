
const { Given, When, Then, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { expect, chromium } = require("@playwright/test");

setDefaultTimeout(30 * 1000);

let browser;
let page;

Given(
    'enter the username {string} and password {string} and click on the login button',
    async function (username, password) {

        browser = await chromium.launch({
            headless: false
        });

        page = await browser.newPage();

        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill(username);
        await page.locator("#password").fill(password);
        await page.locator("#login-button").click();
    }
);

When(
    'the dashboard is visible and the product {string} is added to the cart',
    async function (productName) {

        // Verify Products page
        await expect(page.locator(".title")).toHaveText("Products");

        // Find the required product
        const product = page
            .locator(".inventory_item")
            .filter({ hasText: productName });

        // Verify product is visible
        await expect(product).toBeVisible();

        // Click Add to Cart
        await product.getByRole("button", { name: /Add to cart/i }).click();
    }
);

Then(
    "the cart is visible and click on the checkout button",
    async function () {

        await page.locator(".shopping_cart_link").click();

        await expect(page.locator(".title")).toHaveText("Your Cart");

        await page.locator("#checkout").click();
    }
);

When(
    "the shipping details are entered and the continue button is pressed",
    async function () {

        await page.locator("#first-name").fill("Merlin");
        await page.locator("#last-name").fill("Rachel");
        await page.locator("#postal-code").fill("600001");

        await page.locator("#continue").click();
    }
);

Then(
    "the order of the product is visible",
    async function () {

        await expect(
            page.locator(".inventory_item_name")
        ).toHaveText("Sauce Labs Backpack");
    }
);

When(
    "i click on the finish button",
    async function () {

        await page.locator("#finish").click();
    }
);

Then(
    "the order confirmation message-thankyou for your order",
    async function () {

        await expect(
            page.locator(".complete-header")
        ).toHaveText("Thank you for your order!");
    }
);

