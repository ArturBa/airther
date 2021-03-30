import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IpApiService } from '../services/ip-api/ip-api.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const IpApiServiceMock = jasmine.createSpyObj('IpApiService', [
    'getLocation',
  ]);
  IpApiServiceMock.getLocation.and.returnValue(
    of([
      {
        county: 'PL',
        city: 'Krk',
        latitude: 0,
        longitude: 0,
      },
    ])
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: IpApiService, useValue: IpApiServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update location on call', () => {
    const location = { latitude: 10, longitude: 10 };
    component.updateLocation(location);
    expect(component.location).toEqual(location);
  });
});
