import { AirQuality } from '../models/air-quality.model';
import { Component, Input } from '@angular/core';
import { Weather } from '../../services/open-weather/open-weather.model';

/**
 * Forecast component
 */
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  @Input() weatherForecast: Weather[];
  @Input() airQualityForecast: AirQuality[];
}
