package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDef09_CaptureGroup {
	@Given("^I am on empty given statement$")
	public void i_am_on_empty_given_statement() {
		System.out.println("Empty statement");
	}

	/**
	 * Different statement has been mapped to one step definition 
	 * Arg has been captured and passed into step for further logic
	 */
	@Then("^I (find|donot find) salary in my account$")
	public void i_find_salary_in_my_account(String arg) {
		System.out.println("Capture Group: " + arg);
	}

	/**
	 * Similar statement has been mapped to one step definition 
	 * Arg has not been captured as we don't require further logic on this different statements
	 */
	@Given("^(?:I have|User has|He has) some money in my account$")
	public void i_have_some_money_in_my_account() {
		System.out.println("Non Capture Group");
	}

}


















