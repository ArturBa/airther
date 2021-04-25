import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TestHelper } from 'src/app/shared/test/test.helper';
import { HourlyDetailsComponent } from '../hourly-details/hourly-details.component';
import {
  HourlySwitchComponent,
  HOURLY_SHOW,
} from '../hourly-switch/hourly-switch.component';

import { HourlyForecastComponent } from './hourly-forecast.component';

describe('HourlyForecastComponent', () => {
  let component: HourlyForecastComponent;
  let fixture: ComponentFixture<HourlyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HourlyForecastComponent,
        HourlySwitchComponent,
        HourlyDetailsComponent,
      ],
      imports: [CarouselModule, CardModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyForecastComponent);
    component = fixture.componentInstance;
    component.detailsDate = TestHelper.testDate;
    component.airQualityForecast = TestHelper.airQualityForecast;
    component.weatherForecast = TestHelper.weatherForecast;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getForecast', () => {
    it('should return weather, when weather selected', () => {
      component.showType = HOURLY_SHOW.weather;
      fixture.detectChanges();
      expect(component.getForecast()).toEqual(TestHelper.weatherForecast);
    });
    it('should return air quality, when air quality selected', () => {
      component.showType = HOURLY_SHOW.airQuality;
      fixture.detectChanges();
      expect(component.getForecast()).toEqual(TestHelper.airQualityForecast);
    });
  });

  describe('toggleDetails', () => {
    it('should set null if set again the same', fakeAsync(() => {
      component.toggleDetails(TestHelper.testDate);
      tick(301);
      fixture.whenStable().then(() => {
        expect(component.detailsDate).toEqual(null);
      });
    }));
    it('should set new date', () => {
      const date = new Date(TestHelper.testDate.getMinutes() + 10);
      component.toggleDetails(date);
      expect(component.detailsDate).toEqual(date);
    });
    it('should set date if null previously', fakeAsync(() => {
      component.detailsDate = null;
      component.toggleDetails(TestHelper.testDate);
      tick(301);
      fixture.whenStable().then(() => {
        expect(component.detailsDate).toEqual(TestHelper.testDate);
      });
    }));
  });

  describe('in set time', () => {
    beforeEach(() => {
      component.detailsDate = TestHelper.testDate;
      fixture.detectChanges();
    });
    it('should return a elem from weather', () => {
      expect(component.weatherSelectedTime).toEqual(
        TestHelper.weatherForecast[0]
      );
    });
    it('should return a elem airQual', () => {
      expect(component.airQualitySelectedTime).toEqual(
        TestHelper.airQualityForecast[0]
      );
    });
  });
});
