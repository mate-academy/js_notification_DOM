///<reference types=‘cypress’/>
'use strict';

describe('Tests for your notifications.', () => {
  before(() => {
    cy.visit('/');
  });

  it('Success message.', () => {
    cy.get('[class = "notification success"]').should('have.attr', 'style', 'top: 10px; right: 10px;');
    cy.get('[class = "notification success"]').children('h2').should('have.attr', 'class', 'title');
    cy.get('[class = "notification success"]').children('p');
  });

  it('Error message.', () => {
    cy.get('[class = "notification error"]').should('have.attr', 'style', 'top: 150px; right: 10px;');
    cy.get('[class = "notification error"]').children('h2').should('have.attr', 'class', 'title');
    cy.get('[class = "notification error"]').children('p');
  });

  it('Warning message.', () => {
    cy.get('[class = "notification warning"]').should('have.attr', 'style', 'top: 290px; right: 10px;');
    cy.get('[class = "notification warning"]').children('h2').should('have.attr', 'class', 'title');
    cy.get('[class = "notification warning"]').children('p');
  });

  it('Messages should disappear in 2 seconds.', () => {
    cy.wait(2000).then(() => {
      cy.get('[class = "notification success"]').should('not.visible');
      cy.get('[class = "notification error"]').should('not.visible');
      cy.get('[class = "notification warning"]').should('not.visible');
    });
  });
});
