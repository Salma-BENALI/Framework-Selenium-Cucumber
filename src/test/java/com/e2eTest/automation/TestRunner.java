package com.e2eTest.automation;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/specs/features" },
// glue= {""},
		plugin = { "pretty", "html:target/cucumber-html-report" }, snippets = SnippetType.CAMELCASE, tags = {
				("@authentification,@patientMedicalForm") }, monochrome = true)

public class TestRunner {

}