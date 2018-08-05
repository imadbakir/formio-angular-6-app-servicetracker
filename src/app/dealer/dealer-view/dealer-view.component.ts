import { Component } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-dealer-view',
  templateUrl: './dealer-view.component.html',
  styleUrls: ['./dealer-view.component.scss']
})
export class DealerViewComponent extends FormioResourceViewComponent {
  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
    console.log(service);
  }
}
