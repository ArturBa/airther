import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './URL';

import { CityLocation, FullWeather, FullAir } from './open-weather.model';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get city in openweather api standard by his name
   * @param city city name
   * @returns list of city locations
   */
  getLocation(city: string): Observable<CityLocation[]> {
    return this.httpClient.get<CityLocation[]>(
      this.enterCity(city, API_URL.location)
    );
  }

  /**
   * Get current weather and forecast in openweather api standard for given coords
   * @param lat latitude
   * @param lon longitude
   * @returns current weather and forecast
   */
  getWeather(lat: number, lon: number): Observable<FullWeather> {
    return this.httpClient.get<FullWeather>(
      this.enterCoord(lat, lon, API_URL.weather)
    );
  }

  /**
   * Get current air quality in openweather api standard for given coords
   * @param lat latitude
   * @param lon longitude
   * @returns current air quality
   */
  getCurrentAir(lat: number, lon: number): Observable<FullAir> {
    return this.httpClient.get<FullAir>(
      this.enterCoord(lat, lon, API_URL.air_current)
    );
  }

  /**
   * Get air quality forecast in openweather api standard for given coords
   * @param lat latitude
   * @param lon longitude
   * @returns air quality forecast
   */
  getAirForecast(lat: number, lon: number): Observable<FullAir> {
    return this.httpClient.get<FullAir>(
      this.enterCoord(lat, lon, API_URL.air_forecast)
    );
  }

  /**
   * Get url address with a given city
   * @param City city name
   * @param address URL address
   * @returns Address with a given name
   */
  protected enterCity(City: string, address: string): string {
    return address.replace('{city name}', City.toString());
  }

  /**
   * Get url address with given coords
   * @param lat latitude
   * @param lon longitude
   * @param address URL address
   * @returns Address with given coords
   */
  protected enterCoord(lat: number, lon: number, address: string): string {
    return address
      .replace('{lat}', lat.toString())
      .replace('{lon}', lon.toString());
  }
}
