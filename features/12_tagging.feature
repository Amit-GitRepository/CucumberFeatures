@tags
Feature: Tags
  In order to test tags in cucumber
  As a user
  I want to verify these with examples

  @one @wip
  Scenario: One
    Given I am running scenario one

  @two @wip
  Scenario: Two
    Given I am running scenario two

  @one @two
  Scenario: Three
    Given I am running scenario three

  @wip
  Scenario: work in progress
    Given I am running scenario wip
#Taggig examples    
#mvn test -Dcucumber.options="--tags ~@one"     all test cases excrpt @one    
#mvn test -Dcucumber.options="--tags @one --tags @two"     AND case | only scenario 'Three' will run
#mvn test -Dcucumber.options="--tags @one,@two"         OR case | all test case either @one or @two or both   
#mvn test -Dcucumber.options="--tags @one,@two --tags @wip"    AND + OR | {@one AND @wip}  or  {@two AND @wip}   
