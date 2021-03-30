import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  location = {};
  city = '';
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  updateLocation(location: { latitude: number; longitude: number }): void {
    this.location = location;
    // TODO: remove
    this.city = (location.latitude as unknown) as string;
  }
}
