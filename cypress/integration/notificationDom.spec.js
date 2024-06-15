'use strict';

Cypress.Commands.add('hasNotification', (selector, posTop, posRight) => {
  cy.get(selector).should(
    'have.attr',
    'style',
    `top: ${posTop}px; right: ${posRight}px;`,
  );
  cy.get(selector).children('h2').should('have.attr', 'class', 'title');
  cy.get(selector).children('p');
});

describe('Notifications app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.notification.success').as('success');
    cy.get('.notification.error').as('error');
    cy.get('.notification.warning').as('warning');
  });

  it('should print `success` message', () => {
    cy.hasNotification('@success', 10, 10);
  });

  it('should print `error` message', () => {
    cy.hasNotification('@error', 150, 10);
  });

  it('should print `warning` message', () => {
    cy.hasNotification('@warning', 290, 10);
  });

  it('messages should disappear in 2 seconds', () => {
    cy.get('@success', { timeout: 2000 }).should('not.visible');
    cy.get('@error', { timeout: 2000 }).should('not.visible');
    cy.get('@warning', { timeout: 2000 }).should('not.visible');
  });
});
