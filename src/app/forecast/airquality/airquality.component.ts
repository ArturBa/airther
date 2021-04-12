import { Component, Input, OnInit } from '@angular/core';
import { AirQualityIndexEnum } from 'src/app/shared/enums/air-quality-index.enum';
import { AirQuality } from '../models/air-quality.model';

@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.scss'],
})
export class AirqualityComponent implements OnInit {
  @Input() airQuality: AirQuality;

  get airQualityIndexName(): string {
    return AirQualityIndexEnum[this.airQuality.index];
  }

  constructor() {}

  ngOnInit(): void {}
}
