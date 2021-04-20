import { Component, Input, OnInit } from '@angular/core';
import {
  WeatherForecastModel,
  AirQualityForecastModel,
} from '../../services/open-weather/open-weather.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() weatherForecast: WeatherForecastModel;
  @Input() airQualityForecast: AirQualityForecastModel;

  constructor() {}

  ngOnInit(): void {}
}
