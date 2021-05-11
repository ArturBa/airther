import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ViewChild } from '@angular/core';

import { HOURLY_SHOW } from '../hourly-switch/hourly-switch.component';
import { WidthHelper } from '../../helpers/width.helper';
import { Weather } from '../../services/open-weather/open-weather.model';
import { AirQuality } from '../models/air-quality.model';
import { AirQualityIndexEnum } from 'src/app/shared/enums/air-quality-index.enum';

/**
 * Hourly forecast component
 */
@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: 300, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 300, opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class HourlyForecastComponent implements OnInit {
  /**
   * Weather forecast object array
   */
  @Input() weatherForecast: Weather[];
  /**
   * Air quality object array
   */
  @Input() airQualityForecast: AirQuality[];

  @ViewChild('details') protected detailsElem: ElementRef;

  /**
   * Hourly show enum copy to access on template
   */
  readonly HOURLY_SHOW = HOURLY_SHOW;

  /**
   * Details date to show
   * If null no details are shown
   */
  detailsDate: number | null = null;

  /**
   * Current show type
   */
  showType = HOURLY_SHOW.weather;

  /**
   * Current page of caurousel
   */
  currentPage = 0;

  /**
   * carrousel config copy to template
   */
  readonly responsiveOptions = WidthHelper.responsiveOptions;

  /**
   * component inner width
   */
  innerWidth: number;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  /**
   * Get a forecast depending on current show type
   * @returns forecast
   */
  getForecast(): Weather[] | AirQuality[] {
    if (this.showType === HOURLY_SHOW.airQuality) {
      return this.airQualityForecast;
    }
    return this.weatherForecast;
  }

  /**
   * Set a new date
   * If new date is equal to a current, date is set to null
   * @param date new date
   */
  toggleDetails(date: number): void {
    if (date === this.detailsDate) {
      this.detailsDate = null;
      setTimeout(
        () =>
          window.scrollBy({
            top: -this.detailsElem.nativeElement.offsetHeight,
            behavior: 'smooth',
          }),
        200
      );
    } else if (this.detailsDate === null) {
      this.detailsDate = date;
      setTimeout(
        () =>
          this.detailsElem.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          }),
        300
      );
    } else {
      this.detailsDate = date;
    }
  }

  /**
   * Get a air quality index name
   * @param index air quality index enum value
   */

  getAirQualityIndexName(index: AirQualityIndexEnum): string {
    return AirQualityIndexEnum[index];
  }

  /**
   * Get a weather for details in selected time
   */
  get weatherSelectedTime(): Weather | null {
    if (!this.detailsDate) {
      return null;
    }
    return this.weatherForecast.filter(
      (forecast) => forecast.dt === this.detailsDate.valueOf()
    )[0];
  }

  /**
   * Get a air quality for details in selected time
   */
  get airQualitySelectedTime(): AirQuality | null {
    if (!this.detailsDate) {
      return null;
    }
    return this.airQualityForecast.filter(
      (forecast) => forecast.dt === this.detailsDate.valueOf()
    )[0];
  }

  getIcon(forecast: Weather): string {
    const icon = forecast?.weather[0].icon;
    switch (icon) {
      case '01d':
        return 'wi-day-sunny';
      case '02d':
        return 'wi-day-cloudy';
      case '03d':
        return 'wi-cloud';
      case '04d':
        return 'wi-cloudy';
      case '09d':
        return 'wi-showers';
      case '10d':
        return 'wi-rain';
      case '11d':
        return 'wi-thunderstorm';
      case '13d':
        return 'wi-snow';
      case '50d':
        return 'wi-dust';
      default:
        return 'wi-day-sunny';
    }
  }

  /**
   * Update width on resize
   * @param event window resize
   */
  @HostListener('window:resize', ['$event'])
  protected onResize(event): void {
    this.innerWidth = window.innerWidth;
    if (this.isSmallScreen()) {
      this.detailsDate = null;
    }
  }

  /**
   * Check if we are on small screen (mobile)
   * @returns true if screen is small
   */
  isSmallScreen(): boolean {
    return WidthHelper.isSmallScreen(this.innerWidth);
  }

  /**
   * Update details on carousel page changes
   * @param event onPage event
   */
  pageChanged(e: { page: number }): void {
    if (this.isSmallScreen()) {
      const index = this.getForecast().findIndex(
        (x) => x.dt === this.detailsDate
      );
      if (e.page > this.currentPage) {
        this.toggleDetails(this.getForecast()[index + 1].dt);
      } else if (e.page < this.currentPage) {
        this.toggleDetails(this.getForecast()[index - 1].dt);
      }
      this.currentPage = e.page;
    }
  }
}
