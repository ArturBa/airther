import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';

/**
 * PrimeNG imports
 */
const PRIME_IMPORTS = [CardModule];

@NgModule({
  imports: [PRIME_IMPORTS],
  exports: [PRIME_IMPORTS],
})
export class PrimeModule {}
