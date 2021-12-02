/// <reference types="cypress" />
it('Homepage has title', () => {
  cy.visit('/')
  cy.get('h1')
})
