import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, ProgressSpinnerModule, ButtonModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
