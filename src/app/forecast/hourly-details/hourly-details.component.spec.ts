import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDetailsComponent } from './hourly-details.component';

describe('HourlyDetailsComponent', () => {
  let component: HourlyDetailsComponent;
  let fixture: ComponentFixture<HourlyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
