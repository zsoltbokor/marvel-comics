/// <reference types="cypress" />

import {beforeEachFn} from "../../common/BeforeEach";

describe('Grid page tests', () => {
    beforeEach(()=>{
        beforeEachFn();
    });

    it('has first 20 items loaded', () => {
        cy.get('[data-testid="nav-series"]').click();
        cy.url().should('contain', 'series');

        cy.get('[data-testid="card-portrait"]').then(match => {
            expect(match.length).eq(20);
        })
    });

    it('loads next 20 items by pressing load more', () => {
        cy.get('[data-testid="nav-series"]').click();
        cy.url().should('contain', 'series');

        cy.contains('Load more').click();
        cy.wait(1000);
        cy.contains('Load more').should('exist');

        cy.get('[data-testid="card-portrait"]').then(match => {
            expect(match.length).eq(40);
        })
    });
});

export {}
