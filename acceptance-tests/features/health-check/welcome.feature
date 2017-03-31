Feature: Welcome
 
  Presented with the Response Page

  Scenario: valid submission of the team health check form
    Given I navigate to the health check form
    Then I am presented with no error message
    
    Scenario: responses are grouped by response
    Given navigate to the response data page
    When I click the filter by response button
    Then I am presented with the submitted responses grouped by response

  Scenario: responses are grouped by question
    Given navigate to the response data page
    When I click the filter by question button
    Then I am presented with the submitted responses grouped by question



