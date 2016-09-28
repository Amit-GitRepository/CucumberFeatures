package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef01_Basic {
	
	@Given("^I want to write a step with precondition$")
	public void i_want_to_write_a_step_with_precondition() throws Throwable {
	    System.out.println("I want to write a step with precondition");
	}

	@Given("^some other precondition$")
	public void some_other_precondition() throws Throwable {
	    System.out.println("some other precondition");
	}

	@When("^I complete action$")
	public void i_complete_action() throws Throwable {
		System.out.println("I complete action");
	}

	@When("^some other action$")
	public void some_other_action() throws Throwable {
		System.out.println("some other action");
	}

	@When("^yet another action$")
	public void yet_another_action() throws Throwable {
		System.out.println("yet another action");
	}

	@Then("^I validate the outcomes$")
	public void i_validate_the_outcomes() throws Throwable {
		System.out.println("I validate the outcomes");
	}

	@Then("^check more outcomes$")
	public void check_more_outcomes() throws Throwable {
		System.out.println("check more outcomes");
	}

//	@When("^I check for the (\\d+) in step$")
//	public void i_check_for_the_in_step(int arg1) throws Throwable {
//		System.out.println("I check for the "+ arg1 +" in step");
//	}
//
//	
//	@Given("^I want to write a step with \"([^\"]*)\"$")
//	public void i_want_to_write_a_step_with_name(String arg1) throws Throwable {
//		System.out.println("some other preconditionI want to write a step with name " + arg1);
//	}
//
//	@Then("^I verify the \"([^\"]*)\" in step$")
//	public void i_verify_the_success_in_step(String arg) throws Throwable {
//	    System.out.println("I verify the success in step");
//	}
//
//	@Then("^I verify the Fail in step$")
//	public void i_verify_the_Fail_in_step() throws Throwable {
//		System.out.println("I verify the Fail in step");
//	}

	
}
