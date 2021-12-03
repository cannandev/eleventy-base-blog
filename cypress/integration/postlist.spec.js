/// <reference types="cypress" />

it('Postlist has posts', () => {
  cy.visit('/')
  cy.get('.article__container').should('have.length.greaterThan', 3)
})
