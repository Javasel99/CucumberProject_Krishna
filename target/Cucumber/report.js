$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFiosLoginUseDataFromDatabase.feature");
formatter.feature({
  "line": 3,
  "name": "Techfios Billing Login Functionalty validation",
  "description": "",
  "id": "techfios-billing-login-functionalty-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@DbBankAndCashFeature"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3931918700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "1 User should be able to fill bank and cash form with valid credentials from database",
  "description": "",
  "id": "techfios-billing-login-functionalty-validation;1-user-should-be-able-to-fill-bank-and-cash-form-with-valid-credentials-from-database",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"username\" from techfios database",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"password\" from techfios database",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters phone as \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters internetBankingUrl as \"\u003cinternetBankingUrl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 404326700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_from_techfios_database(String)"
});
formatter.result({
  "duration": 3862553800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_from_techfios_database(String)"
});
formatter.result({
  "duration": 3194693000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 4310734000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 173337400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 72230000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 303717300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003caccountTitle\u003e",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 119037300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cdescription\u003e",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 101575100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinitialBalance\u003e",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialBalance_in_accounts_page(String)"
});
formatter.result({
  "duration": 80964600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003caccountNumber\u003e",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 98407300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccontactPerson\u003e",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_in_accounts_page(String)"
});
formatter.result({
  "duration": 115517700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cphone\u003e",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_phone_in_accounts_page(String)"
});
formatter.result({
  "duration": 68970800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinternetBankingUrl\u003e",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingUrl_in_accounts_page(String)"
});
formatter.result({
  "duration": 111341700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 599827200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 198460100,
  "status": "passed"
});
formatter.after({
  "duration": 748949400,
  "status": "passed"
});
});