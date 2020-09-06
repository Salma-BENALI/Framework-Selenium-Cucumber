@authentification
Feature: Authentification - OrangeHRM
   ETQ user je souhaite m'authentifier

  @auth
  Scenario: Authentification - OrangeHRM
    Given open application
    When set username
    And set password
    And click login button
    Then show page admin
