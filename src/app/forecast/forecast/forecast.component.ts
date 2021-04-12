import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { OpenWeatherService } from 'src/app/services/open-weather/open-weather.service';
import { Coordinates } from 'src/app/shared/models/coordinates.model';
import { AirQuality } from '../models/air-quality.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit, OnChanges {
  @Input() weatherForecast: any[];
  @Input() airQualityForecast: any[];
  @Input() location: Coordinates;

  airQuality: AirQuality;

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getData();
  }

  private getData(): void {
    this.getAirQuality();
  }

  private getAirQuality(): void {
    this.openWeatherService
      .getAirQuality(this.location)
      .subscribe((data) => (this.airQuality = data));
  }
}
