import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';

import { SharedModule } from '../shared/shared.module';

import { AirqualityComponent } from './airquality/airquality.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyDetailsComponent } from './hourly-details/hourly-details.component';
import { HourlySwitchComponent } from './hourly-switch/hourly-switch.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    ForecastComponent,
    AirqualityComponent,
    WeatherComponent,
    HourlySwitchComponent,
    HourlyForecastComponent,
    HourlyDetailsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CarouselModule,
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
