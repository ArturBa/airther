import { Component, Input } from '@angular/core';

/**
 * Forecast component
 */
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  /**
   * Weather forecast data
   */
  @Input() weatherForecast: any[];
  /**
   * Air quality forecast data
   */
  @Input() airQualityForecast: any[];
}
