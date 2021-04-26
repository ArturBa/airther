import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import {
  AirQualityForecastModel,
  Coord,
  FullAir,
  FullWeather,
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

  /**
   * Variable to check if data is ready
   * To control loading component
   */
  isDataReady = false;

  /**
   * Constructor
   * @param ipApiService IpApiService
   * @param owService OpenWeatherService
   */
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

    this.requestForecastData().subscribe(([weather, air]) => {
      if (weather.hourly?.length < 1) {
        // TODO: add error message
        return;
      }
      this.weatherForecast = {
        forecast: weather.hourly,
        timezoneOffset: weather.timezone_offset,
        ...weather,
      };

      const start = air.list.findIndex((x) => x.dt === weather.hourly[0].dt);
      const end = air.list.findIndex(
        (x) => x.dt === weather.hourly[weather.hourly.length - 1].dt
      );
      this.airQualityForecast = {
        forecast: air.list.slice(start, end + 1),
        ...air,
      };

      this.setDataReady();
    });
  }

  /**
   * Get Weather and Air Quality requests
   */
  protected requestForecastData(): Observable<[FullWeather, FullAir]> {
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
