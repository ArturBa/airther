import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import {
  AirQualityApiDto,
  AirQualityForecastModel,
  Coord,
  FullWeather,
  WeatherForecastModel,
} from '../services/open-weather/open-weather.model';
import { OpenWeatherService } from '../services/open-weather/open-weather.service';
import { AirQualityMapper } from '../services/open-weather/air-quality-mapper';

/**
 * Dashboard of the app
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /**
   * User location
   */
  protected location = {} as Coord;
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
  constructor(protected owService: OpenWeatherService) {}

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
        forecast: air.list
          .slice(start, end + 1)
          .map((a) => AirQualityMapper.Map(a)),
        ...air,
      };

      this.setDataReady();
    });
  }

  /**
   * Get Weather and Air Quality requests
   */
  protected requestForecastData(): Observable<[FullWeather, AirQualityApiDto]> {
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
