import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ForecastModule } from '../forecast/forecast.module';
import { IpApiService } from '../services/ip-api/ip-api.service';
import { LoadingModule } from '../loading/loading.module';
import { LocationModule } from '../location/location.module';
import { OpenWeatherService } from '../services/open-weather/open-weather.service';
import { TestHelper } from '../shared/test/test.helper';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { Coord } from '../services/open-weather/open-weather.model';

describe('DashboardComponent', () => {
  let component: TestDashboard;
  let fixture: ComponentFixture<TestDashboard>;

  const IpApiServiceMock = TestHelper.ipApiMock();
  const OpenWeatherServiceMock = TestHelper.openWeatherMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDashboard],
      imports: [
        CommonModule,
        ForecastModule,
        LoadingModule,
        LocationModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: IpApiService, useValue: IpApiServiceMock },
        { provide: OpenWeatherService, useValue: OpenWeatherServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update location on call', () => {
    const location = { lat: 10, lon: 10 };
    component.updateLocation(location);
    expect(component.getLocation()).toEqual(location);
  });
});

class TestDashboard extends DashboardComponent {
  getLocation(): Coord {
    return this.location;
  }
}
