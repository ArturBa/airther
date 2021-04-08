import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-value',
  templateUrl: './title-value.component.html',
  styleUrls: ['./title-value.component.scss'],
})
export class TitleValueComponent {
  @Input() title: string;
  @Input() value: string;
}
