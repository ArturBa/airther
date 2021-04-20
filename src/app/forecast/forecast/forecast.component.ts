import { Component, Input, OnInit } from '@angular/core';
import {
  AirQuality,
  Weather,
} from '../../services/open-weather/open-weather.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() weatherForecast: Weather[];
  @Input() airQualityForecast: AirQuality[];

  constructor() {}

  ngOnInit(): void {}
}
