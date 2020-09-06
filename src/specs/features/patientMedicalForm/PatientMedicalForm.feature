@patientMedicalForm
Feature: remplir formulaire  - PatientMedical
   ETQ patient je souhaite rempir ce formulaire

  @form
  Scenario: remplir formulaire  - PatientMedical
    Given open application Form Medical
    When set firstname
    And set lastname
    And click submit button

