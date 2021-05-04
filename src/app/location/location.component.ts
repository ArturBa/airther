import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  CityByGPSDto,
  Coord,
} from '../services/open-weather/open-weather.model';
import { IpApiService } from '../services/ip-api/ip-api.service';
import { OpenWeatherService } from '../services/open-weather/open-weather.service';

/**
 * Location component
 */
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  /**
   * Output event if Latitude/Longitude defined
   */
  @Output() locationEvent = new EventEmitter<Coord>();
  /**
   * Input cityData{string} for a city name for weather location
   */
  cityData: string;

  /**
   * Input form
   */
  form: FormGroup;
  /**
   * Error msg for user
   */
  errorMsg = '';

  /**
   * Constructor
   * @param owService OpenWeatherService
   */
  constructor(
    protected owService: OpenWeatherService,
    protected ipApiService: IpApiService
  ) {}

  /**
   * Init a component with a form group
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl(''),
    });
    this.initLocation();
  }

  /**
   * Init application location by user IP
   */
  protected initLocation(): void {
    this.ipApiService.getLocation().subscribe((location) => {
      this.emitLocation(location.latitude, location.longitude);
      this.cityData = location.city;
    });
  }

  protected updateUserLocation(lat: number, lon: number): void {
    this.owService.getCityByCoord(lat, lon).subscribe((res: CityByGPSDto[]) => {
      this.cityData = res[0].name;
    });
  }

  /**
   * Check if form value is empty
   * @returns Return true if empty
   */
  isFormEmpty(): boolean {
    return !this.getCityForm().value?.length;
  }

  /**
   * @returns true if city data is empty
   */
  isCityDataEmpty(): boolean {
    return !this.cityData?.length;
  }

  /**
   * Get user location by GPS service.
   * If any error there is a msg for the user.
   * If success new event is emitted
   */
  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          this.clearError();
          this.emitLocation(lat, lon);
          this.updateUserLocation(lat, lon);
        },
        (decline) => {
          this.errorMsg = 'Permission declined';
        }
      );
    } else {
      this.errorMsg = 'Geolocation is not supported';
    }
  }

  /**
   * Submit data by emitting event.
   * If any error a new msg is on a screen
   */
  onSubmit(): void {
    if (this.isFormEmpty()) {
      this.errorMsg = 'Please input the city';
      return;
    }
    const city = this.getCityForm().value;
    this.owService.getLocation(city).subscribe(
      (location) => {
        if (location.length < 1) {
          this.errorMsg =
            'Please check the city. Cannot found data for this city';
          return;
        }
        const lat = location[0].lat;
        const lon = location[0].lon;

        this.cityData = city;
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

  protected emitLocation(lat: number, lon: number): void {
    this.locationEvent.emit({ lat, lon } as Coord);
  }
}
