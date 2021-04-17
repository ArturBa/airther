import { Component, HostListener, Input, OnInit } from '@angular/core';
import { WidthHelper } from 'src/app/helpers/width.helper';

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

  readonly HOURLY_SHOW = HOURLY_SHOW;
  hourlyShowDropdown = [];

  innerWidth: number;

  // TODO rename this variable
  currentShow = HOURLY_SHOW.weather;

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

  /**
   * Update width on resize
   * @param event window resize
   */
  @HostListener('window:resize', ['$event'])
  protected onResize(event): void {
    this.innerWidth = window.innerWidth;
  }

  /**
   * Check if we are on small screen (mobile)
   * @returns true if screen is small
   */
  isSmallScreen(): boolean {
    return WidthHelper.isSmallScreen(this.innerWidth);
  }

  /**
   * Set current show
   */
  setCurrentShow(newShow: HOURLY_SHOW): void {
    this.currentShow = newShow;
  }

  /**
   * Use for unsort the enum
   */
  unsorted(): void {}
}
