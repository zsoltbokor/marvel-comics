/// <reference types="cypress" />

describe('404 page tests', () => {
    it('opens for not defined route', () => {
        cy.visit('http://localhost:3000/not-defined-route', {failOnStatusCode: false});
        cy.contains('Page does not exist').should('exist');
    })
});

export {};
