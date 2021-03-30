import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { LocationModule } from '../location/location.module';
import { PrimeModule } from '../prime.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule,
    LocationModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
