import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() weatherForecast: any[];

  weather = {
    temp: 6,
    rain: 10,
    description: 'Sunny intervals and a gentle breeze',
  };
}
