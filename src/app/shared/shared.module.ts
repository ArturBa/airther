import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleValueComponent } from './title-value/title-value.component';

@NgModule({
  declarations: [TitleValueComponent],
  imports: [CommonModule],
  exports: [TitleValueComponent],
})
export class SharedModule {}
