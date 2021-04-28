import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  CityLocation,
  FullWeather,
  FullAir,
  AirQualityApiDto,
} from './open-weather.model';

import { OpenWeatherService } from './open-weather.service';
import { API_URL } from './URL';

describe('OpenWeatherService', () => {
  let injector: TestBed;
  let service: OpenWeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherService],
    });
    injector = getTestBed();
    service = TestBed.inject(OpenWeatherService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getLocation', () => {
    it('should return an Observable<CityLocation[]>', () => {
      const dummyLocations: CityLocation[] = [
        {
          name: 'Krk',
          country: 'PL',
          lat: 10,
          lon: 10,
        },
        {
          name: 'Wro',
          country: 'PL',
          lat: 11,
          lon: 11,
        },
      ];
      const searchCity = 'Waw';

      service.getLocation(searchCity).subscribe((location) => {
        expect(location.length).toBe(2);
        expect(location).toEqual(dummyLocations);
      });

      const req = httpMock.expectOne(
        API_URL.location.replace('{city name}', searchCity)
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyLocations);
    });
  });

  describe('#getWeather', () => {
    it('should return an Observable<FullWeather>', () => {
      const dummyWeather: FullWeather = {
        lat: 50,
        lon: 50,
        timezone: 'TZ',
        timezone_offset: 3600,
        hourly: [
          {
            dt: 1234,
            temp: 12,
            feels_like: 12,
            pressure: 1234,
            humidity: 12,
            dew_point: 12,
            uvi: 12,
            clouds: 12,
            visibility: 12,
            wind_speed: 12,
            wind_deg: 12,
            weather: {
              id: 1,
              main: 'string',
              description: 'string',
              icon: 'string',
            },
          },
        ],
      };
      const testLat = 50;
      const testLon = 50;

      service.getWeather(testLat, testLon).subscribe((weather) => {
        expect(weather).toEqual(dummyWeather);
      });

      const req = httpMock.expectOne(
        API_URL.weather
          .replace('{lat}', testLat.toString())
          .replace('{lon}', testLon.toString())
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyWeather);
    });
  });

  describe('#getAirForecast', () => {
    it('should return an Observable<FullAir> ', () => {
      const dummyAir: AirQualityApiDto = {
        coord: {
          lon: 50,
          lat: 50,
        },
        list: [
          {
            main: {
              aqi: 2,
            },
            components: {
              co: 12,
              no: 12,
              no2: 12,
              o3: 12,
              so2: 12,
              pm2_5: 12,
              pm10: 12,
              nh3: 12,
            },
            dt: 3600,
          },
        ],
      };
      const testLat = 50;
      const testLon = 50;

      service.getAirForecast(testLat, testLon).subscribe((air) => {
        expect(air).toEqual(dummyAir);
      });

      const req = httpMock.expectOne(
        API_URL.air_forecast
          .replace('{lat}', testLat.toString())
          .replace('{lon}', testLon.toString())
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyAir);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
