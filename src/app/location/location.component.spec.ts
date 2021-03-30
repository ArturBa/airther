import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OpenWeatherService } from '../services/open-weather.service';

import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  const openWeatherServiceMock = jasmine.createSpyObj(
    'OpenWeatherServiceMock',
    ['getLocation']
  );
  openWeatherServiceMock.getLocation.and.returnValue(
    of({
      location: [
        {
          lat: 0,
          lon: 0,
        },
      ],
    })
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationComponent],
      providers: [
        { provide: OpenWeatherService, useValue: openWeatherServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
