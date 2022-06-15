package runners;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(
			//you have to put featuresfile path here
		features = {"classpath:features"}, 
		glue ="steps",// here you have to put step package name which ever you have as steps put that package name here.
		tags ="@DbBankAndCashFeature",
		monochrome = true,//keep this always true
		dryRun = false,// keep dryRun always false
		plugin = {
				"pretty",
				"html:target/Cucumber", // you save in target folder as html report in cucumber file
				"json:target/Cucumber.json" // you save report in json formate under target folder
		}
			
			)
	
	public class LoginRunner {
		
	}

