import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TitleValueComponent } from './title-value.component';

describe('TitleValueComponent', () => {
  let component: TitleValueComponent;
  let fixture: ComponentFixture<TitleValueComponent>;

  const value = 'value';
  const title = 'title';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleValueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleValueComponent);
    component = fixture.componentInstance;
    component.title = title;
    component.value = value;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have value of input', () => {
    const valueElem = fixture.debugElement.query(By.css('.value'));
    expect(valueElem.nativeElement.textContent).toContain(value);
  });
  it('should have title of input', () => {
    const titleElem = fixture.debugElement.query(By.css('.title'));
    expect(titleElem.nativeElement.textContent).toContain(title);
  });
});
