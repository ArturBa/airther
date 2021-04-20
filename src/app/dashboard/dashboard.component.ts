import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import {
  AirQualityForecastModel,
  Coord,
  WeatherForecastModel,
} from '../services/open-weather/open-weather.model';
import { IpApiService } from '../services/ip-api/ip-api.service';
import { OpenWeatherService } from '../services/open-weather/open-weather.service';

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
  protected location = {} as Coord;
  /**
   * User  city name
   */
  city: string;
  /**
   * Weather forecast data
   */
  weatherForecast: WeatherForecastModel;
  /**
   * Air quality forecast data
   */
  airQualityForecast: AirQualityForecastModel;

  isDataReady = false;

  constructor(
    protected ipApiService: IpApiService,
    protected owService: OpenWeatherService
  ) {}

  /**
   * Init component
   * Get user location and weather
   */
  async ngOnInit(): Promise<void> {
    await this.initLocation();
    this.updateForecast();
  }

  /**
   * Init application location by user IP
   */
  protected initLocation(): Promise<void> {
    return new Promise((res, rej) => {
      this.ipApiService.getLocation().subscribe((location) => {
        this.location = {
          lat: location.latitude,
          lon: location.longitude,
        };
        this.city = location.city;
        res();
      });
    });
  }

  /**
   * Set data loading status
   */
  protected setDataLoading(): void {
    this.isDataReady = false;
  }

  /**
   * Set data ready status
   */
  protected setDataReady(): void {
    this.isDataReady = true;
  }

  /**
   * Update location of user by given address (in latitude and longitude)
   * @param location: User location
   */
  updateLocation(location: Coord): void {
    this.location = location;
    this.updateForecast();
  }

  /**
   * Update forecast for given coords
   */
  protected updateForecast(): void {
    this.setDataLoading();

    this.requestForecastData().subscribe((data) => {
      if (data[0].length < 1) {
        // TODO: add error message
        return;
      }
      this.weatherForecast = {
        forecast: data[0].hourly,
        timezoneOffset: data[0].timezone_offset,
        ...data[0],
      };

      const start = data[1].list.findIndex(
        (x) => x.dt === data[0].hourly[0].dt
      );
      const end = data[1].list.findIndex(
        (x) => x.dt === data[0].hourly[data[0].hourly.length - 1].dt
      );
      this.airQualityForecast = {
        forecast: data[1].list.slice(start, end + 1),
        ...data[1],
      };

      this.setDataReady();
    });
  }

  /**
   * Get Weather and Air Quality requests
   */
  protected requestForecastData(): Observable<any[]> {
    const weatherRequest = this.owService.getWeather(
      this.location.lat,
      this.location.lon
    );
    const airQualityRequest = this.owService.getAirForecast(
      this.location.lat,
      this.location.lon
    );
    return forkJoin([weatherRequest, airQualityRequest]);
  }
}
