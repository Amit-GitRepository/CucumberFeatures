package stepDefinitions;

import cucumber.api.java.en.Given;

public class StepDef07_AmbigousMethods {

	@Given("^I have (\\d+) rupees in my account with \"([^\"]*)\" bank$")
	public void i_have_rupees_in_my_account_with_bank(int arg1, String arg2) throws Throwable {
	    System.out.println("Accout Balance: "+arg1);
	    System.out.println("Bank Name: "+arg2);
	}
	
	
	@Given("^I have 2000 rupees in my account with \"([^\"]*)\" bank$")
	public void rupees_in_my_account_with_bank(int arg1, String arg2) throws Throwable {
	    System.out.println("Accout Balance: "+arg1);
	    System.out.println("Bank Name: "+arg2);
	}


}
