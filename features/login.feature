Feature: User login

  Scenario: Successful login
    Given The user is on the login page.
    When The user enters valid details and clicks submit.
    Then The user should see the products page.