Feature: Checkout

  Scenario: Successful checkout.
    Given The user is signed into their account.
    And The user has added an item to cart.
    And The user navigates to the shopping cart page.
    And The user navigates to checkout.
    And The user fills in their details.
    When The user completes the checkout process.
    Then The user should see the order confirmation page.