import { Given, Then, Before, After } from 'cucumber'

import { expect } from 'chai';
import { browser, ExpectedConditions } from 'protractor';
import { SignInPage } from '../PageObjects/SignInPage';
import { HomePage } from '../PageObjects/HomePage'
let sigInPage = new SignInPage();
let homePage = new HomePage();
let actualResult: string;


Given(/^User navigate to application$/, { timeout: 16000 }, async () => {
    await browser.get(browser.baseUrl);
    await browser.driver.sleep(5000);
});

Then(/^User verifies the application title should contain '(.*)'$/, { timeout: 16000 }, async (expectedTitle: string) => {
    let actualTitle: string = await browser.driver.getTitle();
    expect(actualTitle).include(expectedTitle);
});

Then(/^User enters username as '(.*)'$/, { timeout: 16000 }, async (username: string) => {
    await (await sigInPage.userName()).clear();
    await (await sigInPage.userName()).sendKeys(username);
});

Then(/^User enters password as '(.*)'$/, { timeout: 16000 }, async (password: string) => {
    await (await sigInPage.password()).clear();
    await (await sigInPage.password()).sendKeys(password);
});

Then(/^User clicks on signIn button$/, { timeout: 16000 }, async () => {
    await (await sigInPage.logInButton()).click();
    await browser.driver.sleep(2000);
});

Then(/^User verifies the login '(.*)'$/, { timeout: 5 * 60000 }, async (expectedResult: string) => {
    let isEmailFieldErrorpresent: boolean = await (await sigInPage.errorField('Email')).isPresent();
    let isPasswordFieldErrorPresent: boolean = await (await sigInPage.errorField('Password')).isPresent();
    let isErrorContainerPresent: boolean = await (await sigInPage.errorContiner()).isPresent();
    if (isEmailFieldErrorpresent)
        actualResult = await (await sigInPage.errorField('Email')).getAttribute('data-error');
    else if (isPasswordFieldErrorPresent)
        actualResult = await (await sigInPage.errorField('Password')).getAttribute('data-error');
    else if (isErrorContainerPresent)
        actualResult = await (await sigInPage.errorContiner()).getText();
    else {
        await browser.wait(ExpectedConditions.titleContains('Home'), 30000);
        await browser.driver.sleep(5000);
        let userName = await (await homePage.userNameIcon()).getAttribute('aria-label');
        expect(userName).to.be.equal("Swaraj Barik");
        actualResult = "Login Sucess";
    }
    expect(actualResult).to.be.equal(expectedResult);
});

After(async function () {
    let stream = await browser.takeScreenshot();
    await this.attach(stream, 'image/png');
});