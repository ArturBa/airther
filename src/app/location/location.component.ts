import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../services/open-weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  lat: number;
  lon: number;
  city: string;

  constructor(protected owService: OpenWeatherService) {}

  getUserLocation(): void {
    // get Users current position

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          // TODO: remove when better display method available
          console.log(`position: ${this.lat} , ${this.lon}`);
        },
        (decline) => {
          // TODO: show this to user
          console.log('Permission declined');
        }
      );
    } else {
      // TODO: show this to user
      console.log('Geolocation is not supported');
    }
  }

  onSubmit(cityForm): void {
    this.city = cityForm.value.city;
    // TODO: remove when better display method available
    console.log('City: ' + this.city);
    this.owService.getLocation(this.city).subscribe((location) => {
      this.lat = location[0].lat;
      this.lon = location[0].lon;
      // TODO: remove when better display method available
      console.log(`position: ${this.lat} , ${this.lon}`);
    });
  }
}
