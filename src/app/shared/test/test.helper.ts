import { of } from 'rxjs';

/**
 * Test Helper with shared
 */
export class TestHelper {
  /**
   * def. date for tests
   */
  static testDate = new Date(1618678998);

  /**
   * def. weather forecast
   */
  static weatherForecast = [
    { time: TestHelper.testDate, temp: 100, rain: 10, description: 'nop' },
  ];

  /**
   * def. air quality forecast
   */
  static airQualityForecast = [{ time: TestHelper.testDate }];

  /**
   * Generate a OpenWeatherService Mock
   * @returns openWeatherServiceMock
   */
  static openWeatherMock() {
    const openWeatherServiceMock = jasmine.createSpyObj(
      'OpenWeatherServiceMock',
      ['getLocation']
    );
    openWeatherServiceMock.getLocation.and.returnValue(
      of([
        {
          lat: 0,
          lon: 0,
        },
      ])
    );
    return openWeatherServiceMock;
  }

  /**
   * Generate a IpAPiService Mock
   * @returns ipAPiServiceMock
   */
  static ipApiMock() {
    const IpApiServiceMock = jasmine.createSpyObj('IpApiService', [
      'getLocation',
    ]);
    IpApiServiceMock.getLocation.and.returnValue(
      of([
        {
          county: 'PL',
          city: 'Krk',
          latitude: 0,
          longitude: 0,
        },
      ])
    );
    return IpApiServiceMock;
  }
}
