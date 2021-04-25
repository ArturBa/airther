import { Component, Input } from '@angular/core';
import { Weather } from '../../services/open-weather/open-weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() weatherForecast: Weather;

  get rain(): number {
    return this.weatherForecast?.rain?.['1h'] || 0;
  }

  get snow(): number {
    return this.weatherForecast?.snow?.['1h'] || 0;
  }
}
