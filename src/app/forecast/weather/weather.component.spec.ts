/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { TitleValueComponent } from 'src/app/shared/title-value/title-value.component';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent, TitleValueComponent],
      imports: [CardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    component.weatherForecast = { temp: 0, rain: 10 };
    fixture.detectChanges();
  });

  xit('should create', () => {
    // TODO: Use helper to set data
    expect(component).toBeTruthy();
  });
});
