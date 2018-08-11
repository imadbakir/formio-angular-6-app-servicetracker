import { Component } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-timeclock-view',
  templateUrl: './timeclock-view.component.html',
  styleUrls: ['./timeclock-view.component.scss']
})
export class TimeclockViewComponent extends FormioResourceViewComponent {
  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
  }
}
