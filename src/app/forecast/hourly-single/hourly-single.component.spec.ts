import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySingleComponent } from './hourly-single.component';

describe('HourlySingleComponent', () => {
  let component: HourlySingleComponent;
  let fixture: ComponentFixture<HourlySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlySingleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
