import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.scss'],
})
export class AirqualityComponent implements OnInit {
  @Input() airQualityForecast: any[];

  constructor() {}

  ngOnInit(): void {}
}
