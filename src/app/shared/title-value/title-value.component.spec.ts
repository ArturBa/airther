import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleValueComponent } from './title-value.component';

describe('TitleValueComponent', () => {
  let component: TitleValueComponent;
  let fixture: ComponentFixture<TitleValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleValueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
