@LoginFeature @Regression
 
 Feature: TechFios Billing Login Functionality validation

@LoginScenario1 @smoke
Scenario: 1 User should be able to login with valid credentials 
Given User is on Techfios login page
When User enters "username" from Techfios database
When User enters "password" from Techfios database
When User clicks signin button
Then User should land on dashboard pag