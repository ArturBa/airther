import { Component, OnInit } from '@angular/core';
import { IpApiService } from '../services/ip-api/ip-api.service';

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

  isDataReady = false;

  constructor(protected ipApiService: IpApiService) {}

  async ngOnInit(): Promise<void> {
    await this.initLocation();
    this.updateData();
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
}
