import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownModule } from 'primeng/dropdown';

import { TitleValueComponent } from '../../shared/title-value/title-value.component';

import { HourlySwitchComponent, HOURLY_SHOW } from './hourly-switch.component';

describe('HourlyForecastComponent', () => {
  let component: HourlySwitchComponent;
  let fixture: ComponentFixture<HourlySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlySwitchComponent, TitleValueComponent],
      imports: [DropdownModule, CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update show', () => {
    component.setCurrentShow(HOURLY_SHOW.airQuality);
    expect(component.showType).toEqual(HOURLY_SHOW.airQuality);
  });
});
