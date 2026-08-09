Feature: Shopping cart

  Scenario: Remove item from cart.
    Given The user is signed into their account.
    And The user has added an item to cart.
    And The user navigates to the shopping cart page.
    When The user removes the item from cart.
    Then The user should see an empty cart.