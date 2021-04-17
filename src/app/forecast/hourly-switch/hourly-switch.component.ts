import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { WidthHelper } from 'src/app/helpers/width.helper';

export enum HOURLY_SHOW {
  weather = 'Weather',
  airQuality = 'Air Quality',
}

@Component({
  selector: 'app-hourly-switch',
  templateUrl: './hourly-switch.component.html',
  styleUrls: ['./hourly-switch.component.scss'],
})
export class HourlySwitchComponent implements OnInit {
  @Input() showType: HOURLY_SHOW;
  @Output() showTypeChange = new EventEmitter<HOURLY_SHOW>();

  readonly HOURLY_SHOW = HOURLY_SHOW;
  hourlyShowDropdown = [];

  innerWidth: number;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    Object.keys(HOURLY_SHOW).forEach((key) => {
      this.hourlyShowDropdown = [
        { value: HOURLY_SHOW[key] },
        ...this.hourlyShowDropdown,
      ];
    });
  }

  /**
   * Update width on resize
   * @param event window resize
   */
  @HostListener('window:resize', ['$event'])
  protected onResize(event): void {
    this.innerWidth = window.innerWidth;
  }

  /**
   * Check if we are on small screen (mobile)
   * @returns true if screen is small
   */
  isSmallScreen(): boolean {
    return WidthHelper.isSmallScreen(this.innerWidth);
  }

  /**
   * Set current show
   */
  setCurrentShow(newShow: HOURLY_SHOW): void {
    this.showType = newShow;
    this.showTypeChange.emit(this.showType);
  }

  /**
   * Use for unsort the enum
   */
  unsorted(): void {}
}
