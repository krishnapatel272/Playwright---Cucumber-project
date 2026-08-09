const { Given, When, Then } = require("@cucumber/cucumber");


Given("The user is on the login page.", async function () {
    await this.page.goto("https://www.saucedemo.com/");
});

When("The user enters valid details and clicks submit.", async function () {
    await this.page.locator("#user-name").fill("standard_user");
    await this.page.locator("#password").fill("secret_sauce");
    await this.page.locator("#login-button").click();
});

Then("The user should see the products page.", async function () {
    await this.page.locator(".title").isVisible();
});