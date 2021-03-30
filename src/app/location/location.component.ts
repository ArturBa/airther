import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { OpenWeatherService } from '../services/open-weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  @Output() locationEvent = new EventEmitter();
  @Input() cityData: string;

  form: FormGroup;
  errorMsg = '';

  constructor(protected owService: OpenWeatherService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl(''),
    });
  }

  isFormEmpty(): boolean {
    return this.getCityForm().value.length === 0;
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          this.clearError();
          this.emitLocation(lat, lon);
        },
        (decline) => {
          this.errorMsg = 'Permission declined';
        }
      );
    } else {
      this.errorMsg = 'Geolocation is not supported';
    }
  }

  onSubmit(): void {
    if (this.isFormEmpty()) {
      this.errorMsg = 'Please input the city';
      return;
    }
    const city = this.getCityForm().value;
    this.owService.getLocation(city).subscribe(
      (location) => {
        const lat = location[0].lat;
        const lon = location[0].lon;

        this.clearError();
        this.emitLocation(lat, lon);
      },
      (err) => {
        this.errorMsg =
          'Please check the city. Cannot found data for this city';
      }
    );
  }

  protected getCityForm(): FormControl {
    return this.form.get('city') as FormControl;
  }

  protected clearError(): void {
    this.errorMsg = '';
  }

  protected emitLocation(latitude: number, longitude: number): void {
    this.locationEvent.emit({ latitude, longitude });
  }
}
