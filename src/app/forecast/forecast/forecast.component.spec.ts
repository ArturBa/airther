import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';

import { AirqualityComponent } from '../airquality/airquality.component';
import { HourlyDetailsComponent } from '../hourly-details/hourly-details.component';
import { HourlyForecastComponent } from '../hourly-forecast/hourly-forecast.component';
import { HourlySingleComponent } from '../hourly-single/hourly-single.component';
import { WeatherComponent } from '../weather/weather.component';

import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ForecastComponent,
        AirqualityComponent,
        WeatherComponent,
        HourlyForecastComponent,
        HourlySingleComponent,
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
