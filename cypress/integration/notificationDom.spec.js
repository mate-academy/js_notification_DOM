'use strict';

Cypress.Commands.add('hasNotification', (selector, posTop, posRight) => {
  cy.get(selector)
    .should('have.attr', 'style', `top: ${posTop}px; right: ${posRight}px;`);
  cy.get(selector).children('h2').should('have.attr', 'class', 'title');
  cy.get(selector).children('p');
});

describe('Notifications app', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('/');
  });

  afterEach(() => {
    cy.clock().then(clock => clock.restore());
  });

  it('should print `success` message', () => {
    cy.hasNotification('.notification.success', 10, 10);
  });

  it('should print `error` message', () => {
    cy.hasNotification('.notification.error', 150, 10);
  });

  it('should print `warning` message', () => {
    cy.hasNotification('.notification.warning', 290, 10);
  });

  it('messages should disappear in 2 seconds', () => {
    cy.tick(2200)
    cy.get('.notification.success').should('not.visible');
    cy.get('.notification.error').should('not.visible');
    cy.get('.notification.warning').should('not.visible');
  });
});
