Feature: Products page

  Scenario: Add item to cart
    Given The user is signed into their account.
    And The user is on the products page.
    When The user adds an item to cart.
    Then The user should see the item added to cart.