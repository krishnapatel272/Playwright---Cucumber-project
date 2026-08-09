const { Given, When, Then } = require("@cucumber/cucumber");


Given("The user is signed into their account.", async function () {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator('#user-name').fill('standard_user');
    await this.page.locator('#password').fill('secret_sauce');
    await this.page.locator('#login-button').click();
});


Given("The user is on the products page.", async function () {
    await this.page.locator(".title").isVisible();
});

When("The user adds an item to cart.", async function () {
    await this.page.locator("#add-to-cart-sauce-labs-bike-light").click();
});

Then("The user should see the item added to cart.", async function () {
    await this.page.locator(".remove-sauce-labs-bike-light").isVisible();   
});