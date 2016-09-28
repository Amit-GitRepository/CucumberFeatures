package stepDefinitions;

import cucumber.api.java.en.Given;

public class StepDef13_Hooks {

	@Given("^I am testing hook one$")
	public void i_am_testing_hook_one() {
		System.out.println("Inside H1");
	}

	@Given("^I am testing hook two$")
	public void i_am_testing_hook_two() {
		System.out.println("Inside H2");
	}

}
