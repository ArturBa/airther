import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LocationComponent } from './location.component';

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, CardModule, FormsModule, ReactiveFormsModule],
  exports: [LocationComponent],
})
export class LocationModule {}
