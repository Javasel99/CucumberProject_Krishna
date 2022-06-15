 @OtherLoginFeature @Regression
 Feature: TechFios Other Login Functionality validation
@OtherScenario1
Scenario: 1 User should be able to login with valid credentials(Other) 
Given User is on Techfios login page
When User enters username as "demo@techfios.com"
When User enters password as "abc123"
When User clicks signin button
Then User should land on dashboard page 
		
@OtherScenario2 @smoke
Scenario: 2 User should not be able to login with invalid credentials (Other)
Given User is on Techfios login page
When User enters username as "demo@techfios.com"
When User enters password as "abc124"
When User clicks signin button
Then User should land on dashboard page 

@OtherScenario3 @smoke
Scenario: 2 User should not be able to login with invalid credentials (Other)
Given User is on Techfios login page
When User enters username as "demo2@techfios.com"
When User enters password as "abc124"
When User clicks signin button
Then User should land on dashboard page 	