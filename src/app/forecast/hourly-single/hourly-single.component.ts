import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HOURLY_SHOW } from '../hourly-forecast/hourly-forecast.component';

@Component({
  selector: 'app-hourly-single',
  templateUrl: './hourly-single.component.html',
  styleUrls: ['./hourly-single.component.scss'],
})
export class HourlySingleComponent implements OnInit {
  @Input() showType: HOURLY_SHOW;
  @Input() weatherForecast: any;
  @Input() airQualityForecast: any;

  @Output() toggleDetails = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleDetail(): void {
    this.toggleDetails.emit();
  }
}
