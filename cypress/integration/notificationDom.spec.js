/* eslint-disable strict */
///<reference types="Cypress"/>

describe('Notifications app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.notification.success').as('success');
    cy.get('.notification.error').as('error');
    cy.get('.notification.warning').as('warning');
  });

  it('Success message exists', () => {
    cy.get('@success').should('have.attr', 'style', 'top: 10px; right: 10px;');
    cy.get('@success').children('h2').should('have.attr', 'class', 'title');
    cy.get('@success').children('p');
  });

  it('Error message exists', () => {
    cy.get('@error').should('have.attr', 'style', 'top: 150px; right: 10px;');
    cy.get('@error').children('h2').should('have.attr', 'class', 'title');
    cy.get('@error').children('p');
  });

  it('Warning message exists', () => {
    cy.get('@warning').should('have.attr', 'style', 'top: 290px; right: 10px;');
    cy.get('@warning').children('h2').should('have.attr', 'class', 'title');
    cy.get('@warning').children('p');
  });

  it('Messages should disappear in 2 seconds', () => {
    cy.wait(2000).then(() => {
      cy.get('@success').should('not.visible');
      cy.get('@error').should('not.visible');
      cy.get('@warning').should('not.visible');
    });
  });
});
