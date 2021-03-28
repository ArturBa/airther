import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  lat;
  lon;
  city = 's';

  constructor(protected owService: OpenWeatherService) {}

  getUserLocation(): void {
    // get Users current position

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          console.log(`position: ${this.lat} , ${this.lon}`);
        },
        (decline) => {
          console.log('Permission declined');
        }
      );
    } else {
      console.log('Geolocation is not supported');
    }
  }

  onSubmit(cityForm): void {
    this.city = cityForm.value.city;
    console.log('City: ' + this.city);
    this.owService.getLocation(this.city).subscribe((location) => {
      this.lat = location[0].lat;
      this.lon = location[0].lon;
      console.log(`position: ${this.lat} , ${this.lon}`);
    });
  }
}
