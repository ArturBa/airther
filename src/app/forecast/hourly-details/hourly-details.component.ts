import { Component, Input } from '@angular/core';
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
export class HourlyDetailsComponent {
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
}
