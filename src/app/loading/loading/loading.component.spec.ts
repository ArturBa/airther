import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      imports: [ProgressSpinnerModule, ButtonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set long loading after certain time', fakeAsync(() => {
    tick(5001);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const popUpWindow = fixture.debugElement.query(By.css('#popup-window'));
      expect(component.longLoading).toBeTrue();
    });
  }));

  it('should call window reload on refresh button', () => {
    // const refresh = {
    //   reload: function (value) {
    //     window.location.reload();
    //   }
    // };
    spyOn(window.location, 'reload').and.returnValue();
    // const $window = jasmine.createSpy('$window');
    // spyOn(window.location, 'reload');
    component.reloadCurrentPage();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
