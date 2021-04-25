import { Component, Input } from '@angular/core';
import {
  AirQuality,
  Weather,
} from '../../services/open-weather/open-weather.model';

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
