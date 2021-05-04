import { of } from 'rxjs';
import { AirQualityComponent } from 'src/app/forecast/models/air-quality-component.model';
import { AirQuality } from 'src/app/forecast/models/air-quality.model';
import {
  AQI,
  Components,
  Description,
  FullAir,
  FullWeather,
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

  static weatherDescription: Description[] = [
    {
      id: 1,
      main: 'a',
      description: 'nop',
      icon: 'cloud',
    },
  ];
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

  static fullWeather: FullWeather = {
    lat: 0,
    lon: 0,
    timezone: '',
    timezone_offset: 100,
    hourly: TestHelper.weatherForecast,
  };

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
  static airQualityComponents: AirQualityComponent[] = [];

  static airQualityMain: AQI = {
    aqi: 10000,
  };
  /**
   * def. air quality forecast
   */
  static airQualityForecast: AirQuality[] = [
    {
      time: TestHelper.testDate.valueOf(),
      components: TestHelper.airQualityComponents,
      index: 1,
      indexImageUrl: '',
    },
  ];

  static fullAirQuality: FullAir = {
    coord: {
      lat: 0,
      lon: 0,
    },
    list: TestHelper.airQualityForecast,
  };

  /**
   * Generate a OpenWeatherService Mock
   * @returns openWeatherServiceMock
   */
  static openWeatherMock(): any {
    const openWeatherServiceMock = jasmine.createSpyObj(
      'OpenWeatherServiceMock',
      ['getLocation', 'getWeather', 'getAirForecast', 'getCityByCoord']
    );
    openWeatherServiceMock.getLocation.and.returnValue(
      of([
        {
          lat: 0,
          lon: 0,
        },
      ])
    );
    openWeatherServiceMock.getWeather.and.returnValue(
      of(TestHelper.fullWeather)
    );
    openWeatherServiceMock.getAirForecast.and.returnValue(
      of(TestHelper.fullAirQuality)
    );
    openWeatherServiceMock.getCityByCoord.and.returnValue(
      of([
        {
          name: 'a',
          country: 'poland',
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
