import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'airther';
  lat;
  lng;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getUserLocation();
  }

  getUserLocation() {
    // get Users current position

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(`position: ${this.lat} , ${this.lng}`);
        },
        (decline) => {
          console.log('Permission declined');
        }
      );
    } else {
      console.log('Geolocation is not supported');
    }
  }
}
