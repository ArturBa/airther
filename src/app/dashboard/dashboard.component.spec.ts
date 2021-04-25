import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IpApiService } from '../services/ip-api/ip-api.service';
import { OpenWeatherService } from '../services/open-weather/open-weather.service';

import { DashboardComponent } from './dashboard.component';

xdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: IpApiService, useValue: IpApiServiceMock },
        OpenWeatherService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should update location on call', () => {
    const location = { lat: 10, lon: 10 };
    component.updateLocation(location);
    // expect(component.location).toEqual(location);
  });
});
