import { Config, browser } from 'protractor';

export let config: Config = {
    
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../Features/*.feature"],
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    baseUrl: "https://cloud.trifacta.com/sign-in",
    directConnect : true,
    capabilities: {
        browserName:'chrome'
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        require: ['../Specs/*.js'],
        format: 'json:reports/current/cucumber_report.json'
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],
    
    onPrepare:async function(){
        browser.ignoreSynchronization = true;
        await browser.manage().window().maximize();
    }
}