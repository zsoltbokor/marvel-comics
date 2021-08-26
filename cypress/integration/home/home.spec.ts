/// <reference types="cypress" />

import {beforeEachFn} from "../../common/BeforeEach";

describe("Home tests", () => {
    beforeEach(()=>{
        beforeEachFn();
    });

    it('has navbar', () => {
       cy.get('.navbar').should('exist').and('be.visible');
    });

    it('has 3 main groups on the home screen', () => {
        cy.contains('Marvel Comics').should('exist');
        cy.contains('Marvel Series').should('exist');
        cy.contains('Marvel Events').should('exist');
    });

    it('should navigate to grid page by clicking view all button', () => {
        cy.contains('View all series').click();

        cy.url().should('contain', 'series');
        cy.contains('All series').should('exist');
    })
});

export {}
