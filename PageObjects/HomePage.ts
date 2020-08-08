import { ElementFinder, element, by } from "protractor";

export class HomePage {
    async userNameIcon(): Promise<ElementFinder> {
        return await element(by.xpath("//div[@data-id='settings']/div"));
    }
    async helpIcon(): Promise<ElementFinder> {
        return await element(by.xpath("//div[@aria-label='Help']"));
    }
    async about(): Promise<ElementFinder> {
        return await element(by.xpath("//div[@data-id='about']"));
    }
    async closeButton(): Promise<ElementFinder> {
        return await element(by.xpath("//div[@aria-hidden='false']//button[contains(@class,'close')]"));
    }

    async signOut(): Promise<ElementFinder> {
        return await element(by.xpath("//div[@data-id='sign-out']"));
    }

    async versionNumber(): Promise<ElementFinder> {
        return await element(by.xpath("(//h4/following::p)[1]"));
    }

    async eddition(): Promise<ElementFinder> {
        return await element(by.xpath("(//h4/following::p)[2]"));
    }
}
