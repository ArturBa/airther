import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

const PRIME_IMPORTS = [ButtonModule];

@NgModule({
  declarations: [],
  imports: [PRIME_IMPORTS],
  providers: [],
  bootstrap: [],
  exports: [PRIME_IMPORTS],
})
export class PrimeModule {}
