import { Component, OnInit } from '@angular/core';
import { IpApiService } from '../services/ip-api/ip-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  location = {};
  city = '';
  constructor(protected ipApiService: IpApiService) {}

  ngOnInit(): void {
    this.initLocation();
  }

  initLocation(): void {
    this.ipApiService.getLocation().subscribe((location) => {
      this.location = {
        latitude: location.latitude,
        longitude: location.longitude,
      };
      this.city = location.city;
    });
  }

  updateLocation(location: { latitude: number; longitude: number }): void {
    this.location = location;
    // TODO: remove
    this.city = (location.latitude as unknown) as string;
  }
}
