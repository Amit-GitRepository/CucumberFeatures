package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", 
glue = "stepDefinitions", 
monochrome = true, 
dryRun = false, 
plugin = {
		"pretty", "html:target/htmlreport", "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
		"usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml"}
//tags = {"@tag1", "@date"}
		)
public class RunCukeTest {

}

