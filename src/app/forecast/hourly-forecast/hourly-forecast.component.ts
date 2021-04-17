import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ViewChild } from '@angular/core';

import { HOURLY_SHOW } from '../hourly-switch/hourly-switch.component';
import { WidthHelper } from '../../helpers/width.helper';

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
export class HourlyForecastComponent {
  /**
   * Weather forecast object array
   */
  @Input() weatherForecast: any[];
  /**
   * Air quality object array
   */
  @Input() airQualityForecast: any[];

  @ViewChild('details') protected detailsElem: ElementRef;

  /**
   * Hourly show enum copy to access on template
   */
  readonly HOURLY_SHOW = HOURLY_SHOW;

  /**
   * Details date to show
   * If null no details are shown
   */
  detailsDate: Date | null = null;

  /**
   * Current show type
   */
  showType = HOURLY_SHOW.weather;

  /**
   * carrousel config copy to template
   */
  readonly responsiveOptions = WidthHelper.responsiveOptions;

  /**
   * Get a forecast depending on current show type
   * @returns forecast
   */
  getForecast(): any[] {
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
  toggleDetails(date: Date): void {
    if (date === this.detailsDate) {
      this.detailsDate = null;
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
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
   * Get a weather for details in selected time
   */
  get weatherSelectedTime(): any | null {
    if (this.detailsDate === null) {
      return null;
    }
    return this.weatherForecast.filter(
      (forecast) => forecast.time === this.detailsDate
    )[0];
  }

  /**
   * Get a air quality for details in selected time
   */
  get airQualitySelectedTime(): any | null {
    if (this.detailsDate === null) {
      return null;
    }
    return this.airQualityForecast.filter(
      (forecast) => forecast.time === this.detailsDate
    )[0];
  }
}
