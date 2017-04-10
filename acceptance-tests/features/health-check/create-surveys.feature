Feature: Edit Questions
 
A/C     - user can set up a new survey and create the questions that will be asked
        - results from the new survey are stored in a new collector/database
        
  Scenario: I am able to set up a new survey
    Given that I am on the surveys page
    When I enter the survey name
    And click the "Create" button
    Then my survey will be displayed in the list of surveys

  Scenario: I am able to create questions
    Given that I am on the surveys page
    Then I select my survey
    When I am on the question page
    And I fill out the question details
    And I click "add"
    Then my question will be displayed in the list of questions

  Scenario: Results from my survey are stored in a new collector
    Given that I am on the question page
    And I navigate to the responses tab
    Then results for my survey will be displayed




