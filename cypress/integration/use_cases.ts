/// <reference types="Cypress" />

describe('home page', () => {
  beforeEach(() => {
    cy.visit('/'); // go to the home page
    cy.get('input').clear();
  });

  it('should display the location component', () => {
    cy.get('app-location').should('be.visible');
  });

  const existingCity = 'Muszkowice';
  const nonExistingCity = 'Muszkowic';

  describe('get weather by location', () => {
    it('should get forecast by existing address #1', () => {
      cy.get('input').type(existingCity);

      cy.get('app-location form').submit();
      cy.get('#cityData').should(($div) => {
        expect($div).to.have.length(1);
        const className = $div[0].innerHTML;
        expect(className).to.contain(existingCity);
      });
    });

    it('should not get forecast by non existing address #2', () => {
      cy.get('input').type(nonExistingCity);

      cy.get('app-location form').submit();
      cy.get('.p-error').should('be.visible');
    });
  });

  describe('details weather data', () => {
    beforeEach(() => {
      const openButton = cy.get('.p-button-icon:first');
      openButton.click();
    });

    it('should open details on a click #3', () => {
      cy.get('app-hourly-details').should('be.visible');
    });

    it('should close after click again #4', () => {
      cy.get('.p-button-icon:first').click();
      cy.wait(700);
      cy.get('app-hourly-details').should('not.exist');
    });

    it('should change displayed data if another section selected #6', () => {
      const previousDetails = cy.get('app-hourly-details');
      cy.get('.p-button-icon:nth(2)').click();
      const afterDetails = cy.get('app-hourly-details');

      expect(previousDetails).not.equal(afterDetails);
    });

    it('should change displayed data if another city selected #7', () => {
      const previousWeather = cy.get('app-weather');
      const previousAirQuality = cy.get('app-airquality');
      cy.get('input').type(existingCity);
      cy.get('app-location form').submit();
      cy.get('app-hourly-details').should('not.exist');
      const afterWeather = cy.get('app-weather');
      const afterAirQuality = cy.get('app-airquality');

      expect(previousWeather).not.equal(afterWeather);
      expect(previousAirQuality).not.equal(afterAirQuality);
    });
  });

  describe('change current view mode', () => {
    beforeEach(() => {
      const airQualityButton = cy.get(
        'app-hourly-switch > .p-grid > :nth-child(2)'
      );
      airQualityButton.click();
    });
    it('should show air quality details #8.1', () => {
      cy.get('app-hourly-forecast img').should('be.visible');
    });
    it('should return to previous view if clicked #8.2', () => {
      const weatherQualityButton = cy.get(
        'app-hourly-switch > .p-grid > :nth-child(1)'
      );
      weatherQualityButton.click();
      cy.get('app-hourly-forecast .wi').should('be.visible');
    });
  });
});
