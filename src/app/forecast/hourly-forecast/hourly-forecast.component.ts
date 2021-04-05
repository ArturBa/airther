import { Component, HostListener, Input, OnInit } from '@angular/core';

export enum HOURLY_SHOW {
  weather = 'Weather',
  airQuality = 'Air Quality',
}

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
})
export class HourlyForecastComponent implements OnInit {
  @Input() weatherForecast: any[];
  @Input() airQualityForecast: any[];

  readonly mdMaxWidth = 768; // px
  readonly HOURLY_SHOW = HOURLY_SHOW;
  hourlyShowDropdown = [];

  innerWidth: number;

  // TODO rename this variable
  currentShow = HOURLY_SHOW.weather;

  // -1 means details should not be shown
  detailsId = -1;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    Object.keys(HOURLY_SHOW).forEach((key) => {
      this.hourlyShowDropdown = [
        { value: HOURLY_SHOW[key] },
        ...this.hourlyShowDropdown,
      ];
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
  }

  isSmallScreen(): boolean {
    return this.innerWidth < this.mdMaxWidth;
  }

  setCurrentShow(newShow: HOURLY_SHOW): void {
    this.currentShow = newShow;
  }

  toggleDetails(detailsId): void {
    this.detailsId = detailsId;
  }
}
