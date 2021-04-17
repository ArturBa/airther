import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ViewChild } from '@angular/core';

import { HOURLY_SHOW } from '../hourly-forecast/hourly-forecast.component';
import { WidthHelper } from '../../helpers/width.helper';

@Component({
  selector: 'app-hourly-single',
  templateUrl: './hourly-single.component.html',
  styleUrls: ['./hourly-single.component.scss'],
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
export class HourlySingleComponent implements OnInit {
  @Input() showType: HOURLY_SHOW;
  @Input() weatherForecast: any[];
  @Input() airQualityForecast: any[];

  @ViewChild('details') detailsElem: ElementRef;
  @ViewChild('p-carrousel') carrousel: ElementRef;

  readonly HOURLY_SHOW = HOURLY_SHOW;

  // Null means details should not be shown
  detailsDate: Date | null = null;

  responsiveOptions = WidthHelper.responsiveOptions;

  constructor() {}

  ngOnInit(): void {}

  getForecast(): any[] {
    if (this.showType === HOURLY_SHOW.airQuality) {
      return this.airQualityForecast;
    }
    return this.weatherForecast;
  }

  toggleDetails(date: Date): void {
    if (date === this.detailsDate) {
      this.detailsDate = null;
      setTimeout(
        () =>
          this.carrousel.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          }),
        200
      );
    } else {
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
    }
  }

  get weatherSelectedTime(): any {
    return this.weatherForecast.filter(
      (forecast) => forecast.time === this.detailsDate
    )[0];
  }

  get airQualitySelectedTime(): any {
    return this.airQualityForecast.filter(
      (forecast) => forecast.time === this.detailsDate
    )[0];
  }
}
