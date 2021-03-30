import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';

const PRIME_IMPORTS = [CardModule];

@NgModule({
  imports: [PRIME_IMPORTS],
  exports: [PRIME_IMPORTS],
})
export class PrimeModule {}
