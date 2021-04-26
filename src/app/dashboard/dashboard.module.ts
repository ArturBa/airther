import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { LocationModule } from '../location/location.module';
import { ForecastModule } from '../forecast/forecast.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    LocationModule,
    ForecastModule,
    LoadingModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
