$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": " ETQ user je souhaite m\u0027authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authentification"
    }
  ]
});
formatter.before({
  "duration": 10015534900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@auth"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "set username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "set password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "show page admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDef.openApplication()"
});
formatter.result({
  "duration": 2359150600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.setUsername()"
});
formatter.result({
  "duration": 151456000,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.setPassword()"
});
formatter.result({
  "duration": 149679600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.clickLoginButton()"
});
formatter.result({
  "duration": 2564954900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDef.showPageAdmin()"
});
formatter.result({
  "duration": 819053200,
  "status": "passed"
});
formatter.after({
  "duration": 1681788300,
  "status": "passed"
});
formatter.uri("patientMedicalForm/PatientMedicalForm.feature");
formatter.feature({
  "line": 2,
  "name": "remplir formulaire  - PatientMedical",
  "description": " ETQ patient je souhaite rempir ce formulaire",
  "id": "remplir-formulaire----patientmedical",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@patientMedicalForm"
    }
  ]
});
formatter.before({
  "duration": 8774495700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "remplir formulaire  - PatientMedical",
  "description": "",
  "id": "remplir-formulaire----patientmedical;remplir-formulaire----patientmedical",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@form"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open application Form Medical",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "set firstname",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "set lastname",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FormStepDef.openApplicationForm()"
});
formatter.result({
  "duration": 1871336300,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDef.setFirstname()"
});
formatter.result({
  "duration": 156802600,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDef.setLastname()"
});
formatter.result({
  "duration": 126014100,
  "status": "passed"
});
formatter.match({
  "location": "FormStepDef.clickSubmitButton()"
});
formatter.result({
  "duration": 659039800,
  "status": "passed"
});
formatter.after({
  "duration": 1539975100,
  "status": "passed"
});
});