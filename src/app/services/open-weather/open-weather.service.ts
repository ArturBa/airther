import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './URL';

import { CityLocation } from './open-weather.model';

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
   * Get url address with a given city
   * @param City city name
   * @param address URL address
   * @returns Address with a given name
   */
  protected enterCity(City: string, address: string): string {
    return address.replace('{city name}', City.toString());
  }
}
