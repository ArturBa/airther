/// <reference types="Cypress" />

describe('home page', () => {
  it('should display the location component', () => {
    cy.visit('/'); // go to the home page

    // get the rocket element and verify that the app name is in it
    cy.get('app-location').should('be.visible');
  });

  describe('location', () => {});
});
