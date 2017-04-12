Feature: Edit Questions
 
  TODO -Insert AC here

  Background:
    Given that I am on the question page

  Scenario: I can add questions
    Given that I fill out the question details
    And I click "Add"
    Then my question will be displayed in the list of questions

  Scenario: I can edit my existing question
    Given that I select an existing question
    Then the question will be displayed for editing
    When I edit the question
    And I click "Update"
    Then my question will be updated in the list of questions

  Scenario: I can make a question mandatory
    Given that I select an existing question
    When I am displayed the field "Is mandatory"
    Then I can select the option "yes"
    And I can select the option "no"
    When I click "Update"
    And I select the same question
    Then the option "No" will have persisted
    
  Scenario: I can change the question type
    When I am displayed the field "Question type"
    Then I can select the options
    | Scaled question |
    | Text            |

  Scenario: I can delete questions
    Given that I select an existing question
    Then the question will be displayed for editing
    When I click "Delete"
    Then my question will be deleted from the list of questions




