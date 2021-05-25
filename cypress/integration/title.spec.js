/// <reference types="cypress" />
it('shows title', () => {
  cy.visit('/')
  cy.get('h1')
})
