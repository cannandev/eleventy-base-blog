/// <reference types="cypress" />

it('About widget goes to About page', () => {
  cy.visit('/')
  cy.get('.widget--about').find('.btn').as('aboutButton').should('have.prop', 'href').should('eq', Cypress.config().baseUrl + '/about/')
  cy.get('@aboutButton').click().get('h1').contains('About me')
})
