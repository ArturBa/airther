import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

const PRIME_IMPORTS = [ButtonModule, CardModule];

@NgModule({
  imports: [PRIME_IMPORTS],
  exports: [PRIME_IMPORTS],
})
export class PrimeModule {}
