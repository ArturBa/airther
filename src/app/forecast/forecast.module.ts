import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';

import { SharedModule } from '../shared/shared.module';

import { AirqualityComponent } from './airquality/airquality.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyDetailsComponent } from './hourly-details/hourly-details.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { HourlySingleComponent } from './hourly-single/hourly-single.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    ForecastComponent,
    AirqualityComponent,
    WeatherComponent,
    HourlyForecastComponent,
    HourlySingleComponent,
    HourlyDetailsComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TabMenuModule,
  ],
  exports: [ForecastComponent],
})
export class ForecastModule {}
