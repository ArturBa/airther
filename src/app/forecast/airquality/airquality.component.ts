import { Component, Input, OnInit } from '@angular/core';

import { AirQuality } from '../../services/open-weather/open-weather.model';

@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.scss'],
})
export class AirqualityComponent implements OnInit {
  @Input() airQualityForecast: AirQuality[];

  constructor() {}

  ngOnInit(): void {}
}
