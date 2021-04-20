import { Component, Input } from '@angular/core';
import { Weather } from '../../services/open-weather/open-weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() weatherForecast: Weather;

  weather = {
    temp: 6,
    rain: 10,
    description: 'Sunny intervals and a gentle breeze',
  };
}
