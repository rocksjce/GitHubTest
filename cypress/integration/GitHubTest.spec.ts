import { LoginPage } from './pages/login_page';

describe('GitHub UI and API Tests', () => {

    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.doDefaultLogin();
    });

    it('Should display the GitHub logo', () => {
        cy.get('.octicon.octicon-mark-github.color-fg-default') 
            .should('be.visible');
    });

    it('Should navigate to Explore and Pricing pages correctly', () => {
        cy.get('[aria-label="Open global navigation menu"]').should('be.visible').click()
        cy.contains('Explore')  // Locate "Explore" link
            .should('be.visible')
            .click();
        cy.get('.selected').should('have.text', 'Explore')
        cy.visit('https://github.com/pricing');
        cy.get('.HeaderMenu-link').contains('Pricing')
    });
});

describe('GitHub Public API Tests', () => {

    it('Should navigate to the sign-up page when "Sign up" is clicked', () => {
        cy.visit('https://github.com')
        cy.contains('Sign up') 
            .should('be.visible') 
            .click();
       
        cy.url().should('include', 'signup');
        cy.contains('Enter your email').should('be.visible');
    });

    it('Should retrieve public user information from GitHub API', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/users/octocat',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('login', 'octocat');
            expect(response.body).to.have.property('public_repos').and.to.be.a('number');
        });
    });
});

