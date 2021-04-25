import { of } from 'rxjs';
import {
  AirQuality,
  AQI,
  Components,
  Description,
  Rain,
  Snow,
  Weather,
} from 'src/app/services/open-weather/open-weather.model';

/**
 * Test Helper with shared
 */
export class TestHelper {
  /**
   * def. date for tests
   */
  static testDate = new Date(1618678998);

  static weatherDescription: Description = {
    id: 1,
    main: 'a',
    description: 'nop',
    icon: 'cloud',
  };
  static weatherRainSnow: Rain | Snow = {
    '1h': 10,
  };
  /**
   * def. weather forecast
   */
  static weatherForecast: Weather[] = [
    {
      dt: TestHelper.testDate.valueOf(),
      temp: 10,
      feels_like: 9,
      pressure: 1999,
      humidity: 90,
      dew_point: 90,
      uvi: 90,
      clouds: 90,
      visibility: 90,
      wind_speed: 90,
      wind_gust: 90,
      wind_deg: 90,
      weather: TestHelper.weatherDescription,
      pop: 90,
      rain: TestHelper.weatherRainSnow,
      snow: TestHelper.weatherRainSnow,
    },
  ];

  static airQualityComponent: Components = {
    co: 0,
    no: 0,
    no2: 0,
    o3: 0,
    so2: 0,
    pm2_5: 0,
    pm10: 0,
    nh3: 0,
  };
  static airQualityMain: AQI = {
    aqi: 10000,
  };
  /**
   * def. air quality forecast
   */
  static airQualityForecast: AirQuality[] = [
    {
      dt: TestHelper.testDate.valueOf(),
      components: TestHelper.airQualityComponent,
      main: TestHelper.airQualityMain,
    },
  ];

  /**
   * Generate a OpenWeatherService Mock
   * @returns openWeatherServiceMock
   */
  static openWeatherMock(): any {
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
  static ipApiMock(): any {
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
