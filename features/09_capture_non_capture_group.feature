@capture
Feature: Capture and Non Capture Group
  In order to test Capture and Non Capture Group
  As a user
  I want to verify these with examples

  Scenario: Capture Group
    Given I am on empty given statement
    Then I find salary in my account
    Then I donot find salary in my account

  Scenario: Non Capture Group
    Given I have some money in my account
    Given User has some money in my account
    Given He has some money in my account
