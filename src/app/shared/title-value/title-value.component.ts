import { Component, Input } from '@angular/core';

/**
 * Title & value component
 * May be used for displaying values instead of readolny inputs
 */
@Component({
  selector: 'app-title-value',
  templateUrl: './title-value.component.html',
  styleUrls: ['./title-value.component.scss'],
})
export class TitleValueComponent {
  /**
   * Title
   */
  @Input() title: string;
  /**
   * Value
   */
  @Input() value: string;
}
