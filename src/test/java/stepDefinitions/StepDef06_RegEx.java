package stepDefinitions;

import java.util.List;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDef06_RegEx {

	@Given("^I only have (\\d+) rupees in my account with \"([^\"]*)\" bank$")
	public void i_have_rupees_in_my_account_with_bank(int arg1, String arg2) throws Throwable {
	    System.out.println("Accout Balance: "+arg1);
	    System.out.println("Bank Name: "+arg2);
	}
	

	@When("^I withdraw (\\d+) rupees$")
	public void i_withdraw_rupees(int arg1) throws Throwable {
		System.out.println("Withdrawl Amount: "+arg1);
	}

	@Then("^I have a balance of (\\d+) rupees$")
	public void i_have_a_balance_of_rupees(int arg1) throws Throwable {
		System.out.println("Balance Amount: "+arg1);
	}

	
	@Given("^I have account in \"([^\"]*)\"$")
	public void i_have_account_in(List<String> arg1) throws Throwable {
		System.out.println("Bank List: "+arg1);
		System.out.println("Number of accounts: "+arg1.size());
		
	}

	@When("^I close \"([^\"]*)\" account$")
	public void i_close_account(String arg1) throws Throwable {
		System.out.println("Account Closed: "+arg1);
	}

	@Then("^I have left with \"([^\"]*)\" account$")
	public void i_have_left_with_account(List<String> arg1) throws Throwable {
		System.out.println("Bank List Left: "+arg1);
		System.out.println("Number of accounts Left: "+arg1.size());
	}
}
