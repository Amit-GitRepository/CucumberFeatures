package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;

public class StepDef12_Tagging {

	@Given("^I am running scenario one$")
	public void i_am_running_scenario_one() {
		System.out.println("* 1");
	}

	@Given("^I am running scenario two$")
	public void i_am_running_scenario_two() {
		System.out.println("** 2");
	}

	@Given("^I am running scenario three$")
	public void i_am_running_scenario_three() {
		System.out.println("*** 3");
	}
	
	@Given("^I am running scenario wip$")
	public void i_am_running_scenario_wip() {
		System.out.println("**** wip");
	}
	
	@Given("^I am testing$")
	public void i_am_testing() throws Throwable {
	    throw new PendingException();
	}

	
}
