@patientMedicalForm
Feature: remplir formulaire  - PatientMedical
   i want to fill in the patient form

  @form
  Scenario: remplir formulaire  - PatientMedical
    Given open application Form Medical
    When set firstname
    And set lastname
    And click submit button

