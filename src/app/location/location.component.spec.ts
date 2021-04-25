import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

import { OpenWeatherService } from '../services/open-weather/open-weather.service';
import { TestHelper } from '../shared/test/test.helper';

import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  const openWeatherServiceMock = TestHelper.openWeatherMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationComponent],
      imports: [CardModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: OpenWeatherService, useValue: openWeatherServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    component.cityData = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit the value once location given.', () => {
    spyOn(component.locationEvent, 'emit');
    component.form.get('city').setValue('Kraków');
    component.form.updateValueAndValidity();
    component.onSubmit();
    expect(component.locationEvent.emit).toHaveBeenCalled();
  });

  it('Should show error msg if no location given.', () => {
    spyOn(component.locationEvent, 'emit');
    component.onSubmit();
    expect(component.errorMsg).toBeTruthy();
  });

  it('Should get data from geo-localization.', () => {
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(
      /* tslint:disable */
      function () {
        const position = { coords: { latitude: 32, longitude: -96 } };
        arguments[0](position);
      }
      /* tslint:enable */
    );

    spyOn(component.locationEvent, 'emit');
    component.getUserLocation();
    expect(component.locationEvent.emit).toHaveBeenCalled();
  });

  it('Should not get data from geo-localization if no permission.', () => {
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(
      /* tslint:disable */
      function () {
        const error = 'Some error';
        arguments[1](error);
      }
      /* tslint:enable */
    );

    component.getUserLocation();
    expect(component.errorMsg).toBeTruthy();
  });
});
