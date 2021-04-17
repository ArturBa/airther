import { Component, OnInit } from '@angular/core';
import { IpApiService } from '../services/ip-api/ip-api.service';

/**
 * Dashboard of the app
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  /**
   * User location
   */
  location = {};
  /**
   * User  city name
   */
  city = '';

  // TODO: update this with correct value
  weatherForecast = [];
  airQualityForecast = [];

  /**
   * Variable to check if data is ready
   * To control loading component
   */
  isDataReady = false;

  /**
   * Constructor
   * @param ipApiService IpApiService
   */
  constructor(protected ipApiService: IpApiService) {}

  /**
   * Init component, get user location and data for him
   */
  async ngOnInit(): Promise<void> {
    await this.initLocation();
    this.updateData();
    this.isDataReady = true;
  }

  // TODO: Remove
  protected updateWeatherForecast(): void {
    const date = new Date();
    for (let i = 0; i < 20; i++) {
      const time = date.setMinutes(date.getMinutes() + i * 60);
      this.weatherForecast.push({
        time,
        temp: i % 7,
        rain: i * 8 + 7,
        description: 'Sunny intervals and a gentle breeze',
      });
      this.airQualityForecast.push({
        time,
      });
    }
  }

  /**
   * Init application location by user IP
   */
  initLocation(): Promise<void> {
    return new Promise((res, rej) => {
      this.ipApiService.getLocation().subscribe((location) => {
        this.location = {
          latitude: location.latitude,
          longitude: location.longitude,
        };
        this.city = location.city;
        res();
      });
    });
  }

  updateData(): void {
    this.updateWeatherForecast();
  }

  /**
   * Update location of user by given address (in latitude and longitude)
   */
  updateLocation(location: { latitude: number; longitude: number }): void {
    this.location = location;
    // TODO: remove
    this.city = (location.latitude as unknown) as string;
    this.updateData();
  }
}
