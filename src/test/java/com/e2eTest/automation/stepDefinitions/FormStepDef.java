package com.e2eTest.automation.stepDefinitions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTest.automation.pageObject.FormPage;
import com.e2eTest.automation.util.CommonMethods;
import com.e2eTest.automation.util.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class FormStepDef {
	
	public WebDriver driver;
	private FormPage formPage=new FormPage(driver);
	private CommonMethods commonMethods=new CommonMethods();
	
	public FormStepDef() {
		
		driver=Setup.driver;
	}
	
	@Given("^open application Form Medical$")
	public void openApplicationForm() throws Throwable {
		
		String url="https://form.jotform.com/81665408084158";
		driver.get(url);

	}
	
	@When("^set firstname$")
	public void setFirstname() throws Throwable {
		
		PageFactory.initElements(driver, FormPage.class);
		formPage.sendFirstName();
	}
	
	@When("^set lastname$")
	public void setLastname() throws Throwable {
		
		formPage.sendLastName();
	}
	
	@When("^click submit button$")
	public void clickSubmitButton() throws Throwable {
		
	
		commonMethods.scrollerBottom();
		formPage.clickSubmitButton();
	}
	

}
