import { Component, HostListener, Input, OnInit } from '@angular/core';
import { WidthHelper } from 'src/app/helpers/width.helper';
import { Weather } from 'src/app/services/open-weather/open-weather.model';
import { HOURLY_SHOW } from '../hourly-switch/hourly-switch.component';
import { AirQuality } from '../models/air-quality.model';

/**
 * Hourly details component
 */
@Component({
  selector: 'app-hourly-details',
  templateUrl: './hourly-details.component.html',
  styleUrls: ['./hourly-details.component.scss'],
})
export class HourlyDetailsComponent implements OnInit {
  /**
   * Show type, on this depends a show type
   */
  @Input() showType: HOURLY_SHOW;
  /**
   * Weather forecast to show, is show type is WEATHER
   */
  @Input() weatherForecast: Weather;
  /**
   * Air quality forecast to show, is show type is AIR QUALITY
   */
  @Input() airQualityForecast: AirQuality;

  readonly HOURLY_SHOW = HOURLY_SHOW;
  innerWidth: number;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
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

  get rain(): number {
    return this.weatherForecast?.rain?.['1h'] || 0;
  }

  get snow(): number {
    return this.weatherForecast?.snow?.['1h'] || 0;
  }
}
