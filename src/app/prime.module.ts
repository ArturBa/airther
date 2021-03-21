import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

const PRIME_IMPORTS = [ButtonModule];

@NgModule({
  imports: [PRIME_IMPORTS],
  exports: [PRIME_IMPORTS],
})
export class PrimeModule {}
