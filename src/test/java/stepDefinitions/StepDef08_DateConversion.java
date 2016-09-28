package stepDefinitions;

import java.util.Date;

import cucumber.api.Format;
import cucumber.api.java.en.Given;

public class StepDef08_DateConversion {
	@Given("^date of project release is \"([^\"]*)\"$")
	public void date_of_project_release_is(@Format("dd-MM-yyyy") Date date) {
		System.out.println("Date: "+date);
		System.out.println("Date Class: "+date.getClass());
		
	}

}

// Date: Tue Apr 05 00:00:00 IST 2016
// Date Class: class java.util.Date