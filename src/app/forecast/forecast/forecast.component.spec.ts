import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';

import { AirqualityComponent } from '../airquality/airquality.component';
import { HourlyDetailsComponent } from '../hourly-details/hourly-details.component';
import { HourlySwitchComponent } from '../hourly-switch/hourly-switch.component';
import { HourlyForecastComponent } from '../hourly-forecast/hourly-forecast.component';
import { WeatherComponent } from '../weather/weather.component';

import { ForecastComponent } from './forecast.component';
import { TestHelper } from 'src/app/shared/test/test.helper';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ForecastComponent,
        AirqualityComponent,
        WeatherComponent,
        HourlySwitchComponent,
        HourlyForecastComponent,
        HourlyDetailsComponent,
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule,
        TabMenuModule,
        DropdownModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;

    component.airQualityForecast = TestHelper.airQualityForecast;
    component.weatherForecast = TestHelper.weatherForecast;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
