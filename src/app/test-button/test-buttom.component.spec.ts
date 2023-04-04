// src/app/test-button/test-button.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestButtonComponent } from './test-button.component';

describe('TestButtonComponent', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set `clicked` to true on button click', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');

    button.click();
    fixture.detectChanges();

    expect(component.clicked).toBeTrue();
  });

  it('should display "Button clicked!" when button is clicked', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    const pElement = compiled.querySelector('p');

    button.click();
    fixture.detectChanges();

    expect(pElement.textContent).toContain('Button clicked!');
  });
});
