import { Component, OnInit } from '@angular/core';
import { IpApiService } from '../services/ip-api/ip-api.service';
import { OpenWeatherService } from '../services/open-weather/open-weather.service';
import {
  WeatherForecastModel,
  AirQualityForecastModel,
} from '../services/open-weather/open-weather.model';
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
  location = { latitude: undefined, longitude: undefined };
  /**
   * User  city name
   */
  city = '';
  /**
   * Weather forecast data
   */
  weatherForecast: WeatherForecastModel = new WeatherForecastModel();
  /**
   * Air quality forecast data
   */
  airQualityForecast: AirQualityForecastModel = new AirQualityForecastModel();

  isDataReady = false;

  constructor(
    protected ipApiService: IpApiService,
    protected owService: OpenWeatherService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.initLocation();
    this.updateForecast(this.location.latitude, this.location.longitude);
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
    this.isDataReady = false;
    this.location = location;
    // TODO: remove
    this.city = (location.latitude as unknown) as string;
    this.updateForecast(this.location.latitude, this.location.longitude);
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
      this.weatherForecast.lat = data[0].lat;
      this.weatherForecast.lon = data[0].lon;
      this.weatherForecast.timezone = data[0].timezone;
      this.weatherForecast.timezoneOffset = data[0].timezone_offset;
      this.weatherForecast.forecast = data[0].hourly;

      const start = data[1].list.findIndex(
        (x) => x.dt === data[0].hourly[0].dt
      );
      const end = data[1].list.findIndex(
        (x) => x.dt === data[0].hourly[data[0].hourly.length - 1].dt
      );
      this.airQualityForecast.lat = data[0].lat;
      this.airQualityForecast.lon = data[0].lon;
      this.airQualityForecast.timezone = data[0].timezone;
      this.airQualityForecast.timezoneOffset = data[0].timezone_offset;
      this.airQualityForecast.forecast = data[1].list.slice(start, end + 1);
    });
    this.updateData();
  }

  requestForecastData(latitude: number, longitude: number): Observable<any[]> {
    const response1 = this.owService.getWeather(latitude, longitude);
    const response2 = this.owService.getAirForecast(latitude, longitude);
    return forkJoin([response1, response2]);
  }
}
