import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';

import { PrimeModule } from '../prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, PrimeModule, FormsModule, ReactiveFormsModule],
  exports: [LocationComponent],
})
export class LocationModule {}
