import { Component, OnInit } from '@angular/core';
import { IpApiService } from '../services/ip-api/ip-api.service';
import { OpenWeatherService } from '../services/open-weather/open-weather.service';
import { ForecastModel } from '../services/open-weather/open-weather.model';
import { Observable, forkJoin } from 'rxjs';

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
  /**
   * Forecast data
   */
  forecast: ForecastModel = new ForecastModel();

  isDataReady = false;

  constructor(
    protected ipApiService: IpApiService,
    protected owService: OpenWeatherService
  ) {}

  async ngOnInit(): Promise<void> {
    this.updateData();
    await this.initLocation;
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
    this.isDataReady = true;
  }

  /**
   * Update location of user by given address (in latitude and longitude)
   */
  updateLocation(location: { latitude: number; longitude: number }): void {
    this.location = location;
    // TODO: remove
    this.city = (location.latitude as unknown) as string;
  }

  /**
   * Update forecast for given coords
   */
  updateForecast(latitude: number, longitude: number): void {
    this.requestForecastData(latitude, longitude).subscribe((data) => {
      if (data[0].length < 1) {
        // TODO: add error message
        return;
      }

      this.forecast.lat = data[0].lat;
      this.forecast.lon = data[0].lon;
      this.forecast.timezone = data[0].timezone;
      this.forecast.timezoneOffset = data[0].timezone_offset;
      this.forecast.currentWeather = data[0].current;
      this.forecast.currentAir = data[1].list[0];
      this.forecast.hourlyWeather = data[0].hourly.slice(1);
      const start = data[2].list.findIndex(
        (x) => x.dt === data[0].hourly[1].dt
      );
      const end = data[2].list.findIndex(
        (x) => x.dt === data[0].hourly[data[0].hourly.length - 1].dt
      );
      this.forecast.hourlyAir = data[2].list.slice(start, end + 1);
    });
  }

  requestForecastData(latitude: number, longitude: number): Observable<any[]> {
    const response1 = this.owService.getWeather(latitude, longitude);
    const response2 = this.owService.getCurrentAir(latitude, longitude);
    const response3 = this.owService.getAirForecast(latitude, longitude);
    return forkJoin([response1, response2, response3]);
  }
}
