import { Component } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.scss']
})
export class EquipmentViewComponent extends FormioResourceViewComponent {
  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
  }
}
