Feature: Namespaces
 
A/C   - user is able create a team level area where surveys can be set up
      - user is able to navigate to surveys by team, e.g:
          team 1
            >survey 1
            >survey 2
          team 2
            >survey 1
            >survey 2

  Scenario: I am able to set up projects
    Given that I am on the projects page
    When I enter the project name
    And I click "Add Project"
    Then my project will be displayed in the list of surveys
    
  Scenario: I am able to view surveys by project
    Given that I am on the projects page
    Then I select my project
    And I am on the surveys page


