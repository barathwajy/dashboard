import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscriberdashboard1Component } from './subscriberdashboard1.component';

describe('Subscriberdashboard1Component', () => {
  let component: Subscriberdashboard1Component;
  let fixture: ComponentFixture<Subscriberdashboard1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subscriberdashboard1Component]
    });
    fixture = TestBed.createComponent(Subscriberdashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
