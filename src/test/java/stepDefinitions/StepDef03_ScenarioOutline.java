package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef03_ScenarioOutline {
	
	
	@When("^I check for the (\\d+) in step$")
	public void i_check_for_the_in_step(int arg1) throws Throwable {
		System.out.println("I check for the "+ arg1 +" in step");
	}

	
	@Given("^I want to write a step with \"([^\"]*)\"$")
	public void i_want_to_write_a_step_with_name(String arg1) throws Throwable {
		System.out.println("some other preconditionI want to write a step with name " + arg1);
	}

	@Then("^I verify the \"([^\"]*)\" in step$")
	public void i_verify_the_success_in_step(String arg) throws Throwable {
	    System.out.println("I verify the success in step");
	}
//
//	@Then("^I verify the Fail in step$")
//	public void i_verify_the_Fail_in_step() throws Throwable {
//		System.out.println("I verify the Fail in step");
//	}

	
}
