import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AppointmentResourceComponent } from './appointment-resource.component';

describe('EventResourceComponent', () => {
  let component: AppointmentResourceComponent;
  let fixture: ComponentFixture<AppointmentResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
