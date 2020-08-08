"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var chai_1 = require("chai");
var protractor_1 = require("protractor");
var SignInPage_1 = require("../PageObjects/SignInPage");
var HomePage_1 = require("../PageObjects/HomePage");
var sigInPage = new SignInPage_1.SignInPage();
var homePage = new HomePage_1.HomePage();
var actualResult;
cucumber_1.Given(/^User navigate to application$/, { timeout: 16000 }, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.get(protractor_1.browser.baseUrl)];
            case 1:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.driver.sleep(5000)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^User verifies the application title should contain '(.*)'$/, { timeout: 16000 }, function (expectedTitle) { return __awaiter(void 0, void 0, void 0, function () {
    var actualTitle;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.driver.getTitle()];
            case 1:
                actualTitle = _a.sent();
                chai_1.expect(actualTitle).include(expectedTitle);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^User enters username as '(.*)'$/, { timeout: 16000 }, function (username) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sigInPage.userName()];
            case 1: return [4 /*yield*/, (_a.sent()).clear()];
            case 2:
                _a.sent();
                return [4 /*yield*/, sigInPage.userName()];
            case 3: return [4 /*yield*/, (_a.sent()).sendKeys(username)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^User enters password as '(.*)'$/, { timeout: 16000 }, function (password) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sigInPage.password()];
            case 1: return [4 /*yield*/, (_a.sent()).clear()];
            case 2:
                _a.sent();
                return [4 /*yield*/, sigInPage.password()];
            case 3: return [4 /*yield*/, (_a.sent()).sendKeys(password)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^User clicks on signIn button$/, { timeout: 16000 }, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sigInPage.logInButton()];
            case 1: return [4 /*yield*/, (_a.sent()).click()];
            case 2:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.driver.sleep(2000)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^User verifies the login '(.*)'$/, { timeout: 5 * 60000 }, function (expectedResult) { return __awaiter(void 0, void 0, void 0, function () {
    var isEmailFieldErrorpresent, isPasswordFieldErrorPresent, isErrorContainerPresent, userName;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sigInPage.errorField('Email')];
            case 1: return [4 /*yield*/, (_a.sent()).isPresent()];
            case 2:
                isEmailFieldErrorpresent = _a.sent();
                return [4 /*yield*/, sigInPage.errorField('Password')];
            case 3: return [4 /*yield*/, (_a.sent()).isPresent()];
            case 4:
                isPasswordFieldErrorPresent = _a.sent();
                return [4 /*yield*/, sigInPage.errorContiner()];
            case 5: return [4 /*yield*/, (_a.sent()).isPresent()];
            case 6:
                isErrorContainerPresent = _a.sent();
                if (!isEmailFieldErrorpresent) return [3 /*break*/, 9];
                return [4 /*yield*/, sigInPage.errorField('Email')];
            case 7: return [4 /*yield*/, (_a.sent()).getAttribute('data-error')];
            case 8:
                actualResult = _a.sent();
                return [3 /*break*/, 20];
            case 9:
                if (!isPasswordFieldErrorPresent) return [3 /*break*/, 12];
                return [4 /*yield*/, sigInPage.errorField('Password')];
            case 10: return [4 /*yield*/, (_a.sent()).getAttribute('data-error')];
            case 11:
                actualResult = _a.sent();
                return [3 /*break*/, 20];
            case 12:
                if (!isErrorContainerPresent) return [3 /*break*/, 15];
                return [4 /*yield*/, sigInPage.errorContiner()];
            case 13: return [4 /*yield*/, (_a.sent()).getText()];
            case 14:
                actualResult = _a.sent();
                return [3 /*break*/, 20];
            case 15: return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.titleContains('Home'), 30000)];
            case 16:
                _a.sent();
                return [4 /*yield*/, protractor_1.browser.driver.sleep(5000)];
            case 17:
                _a.sent();
                return [4 /*yield*/, homePage.userNameIcon()];
            case 18: return [4 /*yield*/, (_a.sent()).getAttribute('aria-label')];
            case 19:
                userName = _a.sent();
                chai_1.expect(userName).to.be.equal("Swaraj Barik");
                actualResult = "Login Sucess";
                _a.label = 20;
            case 20:
                chai_1.expect(actualResult).to.be.equal(expectedResult);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.After(function () {
    return __awaiter(this, void 0, void 0, function () {
        var stream;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.takeScreenshot()];
                case 1:
                    stream = _a.sent();
                    return [4 /*yield*/, this.attach(stream, 'image/png')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=SignInStep.js.map