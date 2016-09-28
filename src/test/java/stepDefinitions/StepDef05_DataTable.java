package stepDefinitions;

import java.util.List;
import org.junit.Assert;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef05_DataTable {

	List<List<String>> data;
	int sum = 0;

	@Given("^a list of numbers$")
	public void a_list_of_numbers(DataTable str) throws Throwable {
		data = str.raw();
		
	}

	@When("^I summarize them$")
	public void i_summarize_them() throws Throwable {
		int i=0;
		while(!data.isEmpty() && i<data.size()){
			sum = sum + Integer.parseInt(data.get(i).get(0));
			i++;
		}
		System.out.println( "SUM : " + sum);
	}

	@Then("^should I get (\\d+)$")
	public void should_I_get(int arg1) throws Throwable {
		Assert.assertTrue(sum == arg1);
	}


}
