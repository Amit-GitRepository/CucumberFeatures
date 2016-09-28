package stepDefinitions;

import cucumber.api.java.en.Given;

public class StepDef11_DocString {

	@Given("^one letter \"([^\"]*)\" is missing from following alphabets$")
	public void one_letter_is_missing_from_following_alphabets(String arg1, String arg2) {

		System.out.println("Missing Letter:  " + arg1);
		System.out.println("Doc String:\n\n" + arg2);
	}
}
