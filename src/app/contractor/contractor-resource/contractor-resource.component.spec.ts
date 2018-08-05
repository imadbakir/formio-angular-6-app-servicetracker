import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ContractorResourceComponent } from './contractor-resource.component';

describe('ContractorResourceComponent', () => {
  let component: ContractorResourceComponent;
  let fixture: ComponentFixture<ContractorResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
