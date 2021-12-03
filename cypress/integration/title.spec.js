/// <reference types="cypress" />

it('Homepage has title', () => {
  cy.visit('/')
  cy.get('h1').should('have.length.greaterThan', 0)
})
