import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './URL';
import { map } from 'rxjs/operators';

import { CityLocation } from './open-weather.model';
import { environment } from 'src/environments/environment';
import { Coordinates } from 'src/app/shared/models/coordinates.model';
import { AirQuality } from 'src/app/forecast/models/air-quality.model';
import { AirQualityMapper } from './air-quality-mapper';
import { AirQualityApiDto } from './air-quality-api-dto.model';

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
   * Get air quality for given coordinates
   * @param coordinates place coordinates
   * @returns AirQuality observable
   */
  getAirQuality(coordinates: Coordinates): Observable<AirQuality> {
    const params = new HttpParams()
      .set('lat', coordinates?.latitude?.toString())
      .set('lon', coordinates?.longitude?.toString())
      .set('appid', environment.weatherapi.apiKey);

    return this.httpClient
      .get<AirQualityApiDto>(API_URL.airQuality, { params })
      .pipe(map((res) => AirQualityMapper.Map(res.list[0])));
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
