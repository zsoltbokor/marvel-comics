/// <reference types="cypress" />

import {beforeEachFn} from "../../common/BeforeEach";

describe('Search page tests', () => {
    beforeEach(()=>{
        beforeEachFn()
    });

    it('opens', () => {
        cy.get('[data-testid="search"]').click();
        cy.url().should('contain', 'search');
    });

    it('updates url on search', () => {
        cy.get('[data-testid="search"]').click();
        cy.get('[data-testid="search-input"]').type("iron{enter}");

        cy.url().should('contain', 'iron');
    });

    it('displays results for comics, events and series', () => {
        cy.get('[data-testid="search"]').click();
        cy.get('[data-testid="search-input"]').type("age{enter}");

        cy.contains('Comics').should('exist');
        cy.contains('Events').should('exist');
        cy.contains('Series').should('exist');
        cy.contains('Characters').should('exist');
    });
});

export {};
