import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {EquipmentResourceComponent } from './equipment-resource.component';

describe('EquipmentResourceComponent', () => {
  let component: EquipmentResourceComponent;
  let fixture: ComponentFixture<EquipmentResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
