import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getLocationComponent(): Promise<unknown> {
    return element(by.css('app-location'));
  }

  async getLocationInput(): Promise<unknown> {
    return element(by.css('app-location input')).getAttribute('placeholder');
  }
}
