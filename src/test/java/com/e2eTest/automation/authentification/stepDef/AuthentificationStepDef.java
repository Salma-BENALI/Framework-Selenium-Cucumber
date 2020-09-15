package com.e2eTest.automation.authentification.stepDef;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTest.automation.authentification.pageObjects.AuthentificationPage;
import com.e2eTest.automation.util.CommonMethods;
import com.e2eTest.automation.util.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDef extends CommonMethods{

	public WebDriver driver;
	private AuthentificationPage authentificationPage=new AuthentificationPage(driver);
	private CommonMethods commonMethods = new CommonMethods();
	
	public AuthentificationStepDef() {
		
		driver=Setup.driver;
	}
	
	@Given("^open application$")
	public void openApplication() throws Throwable {
		logger.info("Open Application Orange");
		commonMethods.openBrowserWithConfigFile();
	}

	@When("^set username$")
	public void setUsername() throws Throwable {
		logger.info("Set Username");
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.sendUserName();
	}

	@When("^set password$")
	public void setPassword() throws Throwable {
		logger.info("Set Password");
		authentificationPage.sendUserPassword();
	}

	@When("^click login button$")
	public void clickLoginButton() throws Throwable {
		logger.info("Click login button");
		authentificationPage.clickLoginButton();
	}
	
	@Then("^show page admin$")
	public void showPageAdmin() throws Throwable {
		logger.info("Show Page Admin");
		String wlc=AuthentificationPage.welcome.getText();
		//Assert.assertTrue(wlc.contains("Welcome"));
		Assert.assertEquals("Welcome Linda", wlc);
	}

}
