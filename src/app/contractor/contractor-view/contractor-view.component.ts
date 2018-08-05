import { Component } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-contractor-view',
  templateUrl: './contractor-view.component.html',
  styleUrls: ['./contractor-view.component.scss']
})
export class ContractorViewComponent extends FormioResourceViewComponent {
  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
  }
}
