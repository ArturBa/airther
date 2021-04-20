import { Component, Input, OnInit } from '@angular/core';
import {
  weatherForecastModel,
  airQualityForecastModel,
} from '../../services/open-weather/open-weather.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() weatherForecast: weatherForecastModel;
  @Input() airQualityForecast: airQualityForecastModel;

  constructor() {}

  ngOnInit(): void {}
}
