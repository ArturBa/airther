import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';

import { AirqualityComponent } from './airquality/airquality.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { WeatherComponent } from './weather/weather.component';
import { HourlySingleComponent } from './hourly-single/hourly-single.component';
import { HourlyDetailsComponent } from './hourly-details/hourly-details.component';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TabMenuModule,
    DropdownModule,
  ],
  exports: [ForecastComponent],
})
export class ForecastModule {}
