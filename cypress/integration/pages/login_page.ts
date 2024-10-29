import { LoginPageLocators } from '../../fixtures/login_page_locators';
import { GITHubPagesLocators } from '../../fixtures/ppc_pages_locators';


export class LoginPage {

    _pageUrl: string;
    constructor(pageUrl = '') {
        this._pageUrl = pageUrl
    }

    doDefaultLogin(userName = 'sjce513', password = 'Church@321654', uniqueSession = false, attribute = ''): void {
        let id = uniqueSession ? new Date().getTime() : 0;
        cy.session([userName, password, id], () => {
            this.gotoLoginPage(attribute);
            this.usernameInput().type(userName);
            this.passwordInput().type(password);
            this.loginBtn().click();
        },
        {
            cacheAcrossSpecs: true,
        });

        cy.visit(this._pageUrl);
    }

    gotoLoginPage(attribute = ''): void {
        if (attribute?.length > 0) {
            cy.visit(GITHubPagesLocators.loginPageUrl + attribute);
        } else {
            cy.visit(GITHubPagesLocators.loginPageUrl);
        }
    }

    usernameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(LoginPageLocators.username).siblings('sgre-label').first(); 
    }

    usernameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(LoginPageLocators.username);
    }

    passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(LoginPageLocators.password);
    }

    loginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(LoginPageLocators.loginButton);
    }
}
