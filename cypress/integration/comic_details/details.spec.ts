/// <reference types="cypress" />

import {beforeEachFn} from "../../common/BeforeEach";

describe('Comic details tests', () => {
    beforeEach(()=>{
        beforeEachFn();
    });

    it('opens', () => {
        cy.get('[data-testid="card-portrait"]').first().click();
        cy.url().should('contain', 'comics');

        cy.get('[data-testid="title"]').should('exist');
        cy.get('[data-testid="description"]').should('exist');
        cy.get('[data-testid="creators-list"]').should('exist');
        cy.get('[data-testid="stories-list"]').should('exist');
    });
});

export {};
