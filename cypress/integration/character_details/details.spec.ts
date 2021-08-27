/// <reference types="cypress" />

import {beforeEachFn} from "../../common/BeforeEach";

describe('Character details tests', () => {
    beforeEach(() => {
        beforeEachFn();
    });

    it('opens', () => {
       cy.get('[data-testid="nav-characters"]').click();
       cy.get('[data-testid="card-character"]').first().click();

       cy.url().should('contain', 'characters');
    });

    it('has comics, series, title and teaser', () => {
        cy.get('[data-testid="nav-characters"]').click();
        cy.get('[data-testid="card-character"]').first().click();

        cy.get('[data-testid="title"]').should('exist');
        cy.get('[data-testid="teaser"]').should('exist');

        cy.get('[data-domain="comics"]').should('exist');
        cy.get('[data-domain="series"]').should('exist');
    });
});
