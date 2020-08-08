Feature: Verify the Login Functionality

    Scenario Outline: Verify the login functionality of Trifacta Wrangler with <Type> should show <ExpectedResult>.
        Given User navigate to application
        And User verifies the application title should contain 'Trifacta Wrangler'
        Then User enters username as '<UserName>'
        And User enters password as '<Password>'
        And User clicks on signIn button
        Then User verifies the login '<ExpectedResult>'
        Examples:
            | Type             | UserName                | Password   | ExpectedResult             |
            | Invalid data     | test@email.com          | test       | Invalid email or password. |
            | Invalid email id | test                    | test       | Email must be email format |
            | Valid Details    | swarajbarik07@yahoo.com | Test.12345 | Login Sucess               |


    Scenario: Verify the Application version
        Given User clicks on help icon
        Then User clicks on About Trifacta Wrangler
        Then User prints the application version and product edition
        Then User closes the about window
        And User loggedout from the application
        Then User verifies that the app is navigated back to signIn page