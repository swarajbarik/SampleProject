import { Given, Then } from "cucumber";
import { HomePage } from "../PageObjects/HomePage";
import { browser } from "protractor";
import { expect } from "chai";
let homePage = new HomePage();

Given(/^User clicks on help icon$/, { timeout: 16000 }, async () => {
    console.log('User clicks on help icon');
    await (await homePage.helpIcon()).click();
    await browser.sleep(2000);
});

Then(/^User clicks on About Trifacta Wrangler$/, { timeout: 16000 }, async () => {
    console.log('User clicks on About Trifacta Wrangler');
    await (await homePage.about()).click();
    await browser.sleep(2000);
});

Then(/^User prints the application version and product edition$/, { timeout: 16000 }, async () => {
    console.log('Version Number : ', await (await homePage.versionNumber()).getText());
    console.log('Eddition : ', await (await homePage.eddition()).getText());
});

Then(/^User closes the about window$/, { timeout: 16000 }, async () => {
    console.log('User closes the about window');
    await (await homePage.closeButton()).click();
    await browser.sleep(2000);
});

Then(/^User loggedout from the application$/, { timeout: 16000 }, async () => {
    console.log('User loggedout from the application');
    await (await homePage.userNameIcon()).click();
    await browser.sleep(2000);
    await (await homePage.signOut()).click();
    await browser.sleep(5000);
});

Then(/^User verifies that the app is navigated back to signIn page$/, { timeout: 16000 }, async () => {
    console.log('User verifies that the app is navigated back to signIn pag');
    let actualTitle: string = await browser.driver.getTitle();
    expect(actualTitle).include('Sign In');
});
