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

  getLocation(city: string): Observable<CityLocation> {
    return this.httpClient.get<CityLocation>(
      this.enterCity(city, API_URL.location)
    );
  }

  protected enterCity(City: string, address: string): string {
    return address.replace('{city name}', City.toString());
  }
}
