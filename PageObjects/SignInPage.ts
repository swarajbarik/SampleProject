import { ElementFinder, element, by } from "protractor";

export class SignInPage {
    async userName():Promise<ElementFinder>{
        return await element(by.xpath("//div[@data-label='Email']//input"));
    }

    async password():Promise<ElementFinder>{
        return await element(by.xpath("//div[@data-label='Password']//input"));
    }

    async logInButton():Promise<ElementFinder>{
        return await element(by.xpath("//div[@data-id='primary-button']/div[text()='Log in']"));
    }

    async errorField(fieldName:string):Promise<ElementFinder>{
        return await element(by.xpath("//div[@data-label='"+fieldName+"' and @data-error]"));
    }

    async errorContiner():Promise<ElementFinder>{
        return await element(by.xpath("//div[@data-id='error-container']//div[@data-ts='notification-body']"));
    }
}