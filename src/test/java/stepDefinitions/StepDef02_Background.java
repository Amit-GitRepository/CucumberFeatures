package stepDefinitions;

import cucumber.api.java.en.Given;


public class StepDef02_Background {
	
	@Given("^User has to perform this before every scenario$")
	public void user_has_to_perform_this_before_every_scenario() throws Throwable {
		System.out.println("User has to perform this before every scenario");
	}

	@Given("^Also do this before every step$")
	public void also_do_this_before_every_step() throws Throwable {
	    System.out.println("Also do this before every step");
	}
	
	
	@Given("^Scenario 1 in backgraound feature$")
	public void i_want_to_write_a_step_with_precondition() throws Throwable {
	    System.out.println("Scenario 1 in backgraound feature");
	}
	
	@Given("^Scenario 2 in backgraound feature$")
	public void i_want_to_write_2_step_with_precondition() throws Throwable {
	    System.out.println("Scenario 2 in backgraound feature");
	}
	
	@Given("^Scenario 3 in backgraound feature$")
	public void i_want_to_write_3_step_with_precondition() throws Throwable {
	    System.out.println("Scenario 3 in backgraound feature");
	}
	
	@Given("^Scenario 4 in backgraound feature$")
	public void i_want_to_write_4_step_with_precondition() throws Throwable {
	    System.out.println("Scenario 4 in backgraound feature");
	}
	
	@Given("^Scenario 5 in backgraound feature$")
	public void i_want_to_write_5_step_with_precondition() throws Throwable {
	    System.out.println("Scenario 5 in backgraound feature");
	}
	
	@Given("^Scenario 6 in backgraound feature$")
	public void i_want_to_write_6_step_with_precondition() throws Throwable {
	    System.out.println("Scenario 6 in backgraound feature");
	}
		
}
