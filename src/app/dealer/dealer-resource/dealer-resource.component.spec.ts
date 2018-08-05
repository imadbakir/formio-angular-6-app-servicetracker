import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DealerResourceComponent } from './dealer-resource.component';

describe('DealerResourceComponent', () => {
  let component: DealerResourceComponent;
  let fixture: ComponentFixture<DealerResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
