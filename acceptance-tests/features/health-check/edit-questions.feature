Feature: Edit Questions
 
  TODO -Insert AC here

  Background:
    Given that I am on the question page

  Scenario: I can add questions
    Given that I fill out the question details
    And I click "add"
    Then my question will be displayed in the list of questions

  Scenario: I can edit my existing question
    Given that I select an existing question
    Then the question will be displayed for editing
    When I edit the question
    And I click "update"
    Then my question will be updated in the list of questions
    
  Scenario: I can delete questions
    Given that I select an existing question
    Then the question will be displayed for editing
    When I click "delete"
    Then my question will be deleted from the list of questions

  Scenario: I can make a question mandatory
    When I am displayed the field "Is mandatory"
    Then I can select the option "Yes"
    And I can select the option "No"
    When I click "update"
    And I select the same question
    Then the option "Yes" will have persisted
    
  Scenario: I can change the question type
    When I am displayed the field "Question type"
    Then I can select the options
    | Radio           |
    | Yes/No          |
    | Text            |
    | Multiple Choice |




