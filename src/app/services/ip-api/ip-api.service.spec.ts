import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { IpApiLocationModel } from './ip-api.model';
import { IpApiService } from './ip-api.service';
import { IP_API_URL } from './IP_API_URL';

describe('OpenWeatherService', () => {
  let injector: TestBed;
  let service: IpApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IpApiService],
    });
    injector = getTestBed();
    service = TestBed.inject(IpApiService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getLocation', () => {
    it('should return an Observable<IpApiLocationModel', () => {
      service.getLocation().subscribe((location) => {});

      // const req = httpMock.expectOne(`${service.API_URL}/users`);
      const req = httpMock.expectOne(IP_API_URL.location);
      expect(req.request.method).toBe('GET');
    });
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
