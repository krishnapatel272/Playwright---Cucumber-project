const { Given, When, Then } = require("@cucumber/cucumber");

Given("The user has added an item to cart.", async function () {
    await this.page.locator(".title").isVisible();
    await this.page.locator("#add-to-cart-sauce-labs-bike-light").click();
});

Given("The user navigates to the shopping cart page.", async function () {
    await this.page.locator(".shopping_cart_link").click();
});


When("The user removes the item from cart.", async function () {
    await this.page.locator("#remove-sauce-labs-bike-light").click();
});

Then("The user should see an empty cart.", async function () {
    await this.page.locator(".cart_item").isHidden();
});