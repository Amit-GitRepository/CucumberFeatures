Feature: Ambiguous feature exploration in cucumber
  In order to learn cucumber steps definitions
  As a user
  I want to verify ambigugous keyword exception

  Scenario: Ambiguous keyword scenario
    Given I have 1000 rupees in my account with "HDFC" bank
		When I have 2000 rupees in my account with "X" bank
