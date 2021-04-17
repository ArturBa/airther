import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySwitchComponent } from './hourly-switch.component';

describe('HourlyForecastComponent', () => {
  let component: HourlySwitchComponent;
  let fixture: ComponentFixture<HourlySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlySwitchComponent],
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
});
