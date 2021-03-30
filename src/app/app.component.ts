import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

/**
 * Main app component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Constructor
   */
  constructor(private primengConfig: PrimeNGConfig) {}

  /**
   * Component init and prime ng config
   */
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
