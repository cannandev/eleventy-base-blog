/// <reference types="cypress" />

it('Sitemap loads at sitemap.xml', () => {
  cy.request('http://localhost:8080/sitemap.xml')
  .its('body')
  .should('contain', 'posts/fireside-chats/interview-nightmares-the-inappropriate-driver/')
})
