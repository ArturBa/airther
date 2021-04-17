import { of } from 'rxjs';

export class TestHelper {
  static testDate = new Date(1618678998);
  static weatherForecast = [
    { time: TestHelper.testDate, temp: 100, rain: 10, description: 'nop' },
  ];
  static airQualityForecast = [{ time: TestHelper.testDate }];
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
