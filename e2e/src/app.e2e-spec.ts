import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('location', () => {
    it('should has a location component', async () => {
      await page.navigateTo();
      expect(await page.getLocationComponent()).toBeTruthy();
    });

    it('should has a location input', async () => {
      await page.navigateTo();
      expect(await page.getLocationInput()).toBeTruthy();
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
