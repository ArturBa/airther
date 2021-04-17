import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { HOURLY_SHOW } from '../hourly-switch/hourly-switch.component';

@Component({
  selector: 'app-hourly-details',
  templateUrl: './hourly-details.component.html',
  styleUrls: ['./hourly-details.component.scss'],
})
export class HourlyDetailsComponent {
  @Input() showType: HOURLY_SHOW;
  @Input() weatherForecast: any;
  @Input() airQualityForecast: any;

  readonly HOURLY_SHOW = HOURLY_SHOW;

  constructor() {}
}
