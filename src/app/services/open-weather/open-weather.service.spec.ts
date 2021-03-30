import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { CityLocation } from './open-weather.model';

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

      // const req = httpMock.expectOne(`${service.API_URL}/users`);
      const req = httpMock.expectOne(
        API_URL.location.replace('{city name}', searchCity)
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyLocations);
    });
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
