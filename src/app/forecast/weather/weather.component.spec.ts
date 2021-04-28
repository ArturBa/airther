/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { TestHelper } from 'src/app/shared/test/test.helper';
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
    component.weatherForecast = { ...TestHelper.weatherForecast[0] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return rain value', () => {
    expect(component.rain).toEqual(TestHelper.weatherRainSnow['1h']);
  });
  it('should return snow value', () => {
    expect(component.snow).toEqual(TestHelper.weatherRainSnow['1h']);
  });

  describe('NO rain and snow', () => {
    beforeEach(() => {
      delete component.weatherForecast.snow;
      delete component.weatherForecast.rain;
      fixture.detectChanges();
    });

    it('should return 0 if no rain', () => {
      expect(component.rain).toEqual(0);
    });

    it('should return 0 if no snow', () => {
      expect(component.rain).toEqual(0);
    });
  });
});
