import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { HOURLY_SHOW } from '../hourly-switch/hourly-switch.component';

/**
 * Hourly details component
 */
@Component({
  selector: 'app-hourly-details',
  templateUrl: './hourly-details.component.html',
  styleUrls: ['./hourly-details.component.scss'],
})
export class HourlyDetailsComponent {
  /**
   * Show type, on this depends a show type
   */
  @Input() showType: HOURLY_SHOW;
  /**
   * Weather forecast to show, is show type is WEATHER
   */
  @Input() weatherForecast: any;
  /**
   * Air quality forecast to show, is show type is AIR QUALITY
   */
  @Input() airQualityForecast: any;

  readonly HOURLY_SHOW = HOURLY_SHOW;
}
