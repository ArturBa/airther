import { Component, Input } from '@angular/core';

/**
 * Component to show current weather status
 */
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  /**
   * Weather status object
   */
  @Input() weatherForecast: any;
}
