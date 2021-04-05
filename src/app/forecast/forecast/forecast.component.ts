import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() weatherForecast: any[];
  @Input() airQualityForecast: any[];

  constructor() {}

  ngOnInit(): void {}
}
