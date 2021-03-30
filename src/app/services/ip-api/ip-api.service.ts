import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IpApiLocationModel } from './ip-api.model';
import { IP_API_URL } from './IP_API_URL';

@Injectable({
  providedIn: 'root',
})
export class IpApiService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get city in by IP using IP API
   * @returns list of city locations
   */
  getLocation(): Observable<IpApiLocationModel> {
    return this.httpClient.get<IpApiLocationModel>(IP_API_URL.location);
  }
}
