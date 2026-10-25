const { Given, When, Then } = require("@cucumber/cucumber");

Given("The user navigates to checkout.", async function () {
  await this.page.locator("#checkout").click(); 
  await this.page.locator(".checkout_info_wrapper").isVisible();
});

Given("The user fills in their details.", async function () {
    await this.page.locator("#first-name").fill("test");
    await this.page.locator("#last-name").fill("test");
    await this.page.locator("#postal-code").fill("test");  
    await this.page.locator("#continue").click();
});

When("The user completes the checkout process.", async function(){
  await this.page.locator("#finish").click();
});

Then("The user should see the order confirmation page.", async function(){
  await this.page.locator("#complete-header").isVisible();

});