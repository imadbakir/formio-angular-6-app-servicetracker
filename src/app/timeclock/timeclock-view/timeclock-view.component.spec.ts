import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeclockViewComponent } from './timeclock-view.component';

describe('TimeclockViewComponent', () => {
  let component: TimeclockViewComponent;
  let fixture: ComponentFixture<TimeclockViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeclockViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeclockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
