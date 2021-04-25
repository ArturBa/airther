import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { TestHelper } from 'src/app/shared/test/test.helper';
import { TitleValueComponent } from 'src/app/shared/title-value/title-value.component';

import { HourlyDetailsComponent } from './hourly-details.component';

describe('HourlyDetailsComponent', () => {
  let component: HourlyDetailsComponent;
  let fixture: ComponentFixture<HourlyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyDetailsComponent, TitleValueComponent],
      imports: [CardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDetailsComponent);
    component = fixture.componentInstance;
    component.weatherForecast = TestHelper.weatherForecast[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
