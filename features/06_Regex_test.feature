@regex
Feature: RegEx Features
  In order to learn Regex features
  As a user
  I want to verify how regex are written in feature files

  Scenario: Regex features in various types
    Given I only have 1000 rupees in my account with "HDFC" bank
    And I have 2000 rupees in my account with "X" bank
    When I withdraw 600 rupees
    Then I have a balance of 400 rupees
    Given I have account in "CITY, ICICI, HDFC"
    When I close "ICICI" account
    Then I have left with "CITY, HDFC" account
