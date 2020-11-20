'use strict';

describe('Notifications app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.notification.success').as('success');
    cy.get('.notification.error').as('error');
    cy.get('.notification.warning').as('warning');
  });

  it('should print `success` message', () => {
    cy.get('@success').should('have.attr', 'style', 'top: 10px; right: 10px;');
    cy.get('@success').children('h2').should('have.attr', 'class', 'title');
    cy.get('@success').children('p');
  });

  it('should print `error` message', () => {
    cy.get('@error').should('have.attr', 'style', 'top: 150px; right: 10px;');
    cy.get('@error').children('h2').should('have.attr', 'class', 'title');
    cy.get('@error').children('p');
  });

  it('should print `warning` message', () => {
    cy.get('@warning').should('have.attr', 'style', 'top: 290px; right: 10px;');
    cy.get('@warning').children('h2').should('have.attr', 'class', 'title');
    cy.get('@warning').children('p');
  });

  it('messages should disappear in 2 seconds', () => {
    cy.get('@success', { timeout: 2000 }).should('not.visible');
    cy.get('@error', { timeout: 2000 }).should('not.visible');
    cy.get('@warning', { timeout: 2000 }).should('not.visible');
  });
});
