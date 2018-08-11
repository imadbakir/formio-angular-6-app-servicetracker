import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService,
} from 'angular-formio/resource';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerResourceComponent } from './customer-resource/customer-resource.component';
import { AppointmentModule } from '../appointment/appointment.module';
import { EquipmentModule } from '../equipment/equipment.module';
const customerResourceRoutes: Routes = FormioResourceRoutes({
  view: CustomerViewComponent,
  resource: CustomerResourceComponent,

});

customerResourceRoutes[2].children.push({
  path: 'appointment',
  loadChildren: () => AppointmentModule
});


customerResourceRoutes[2].children.push({
  path: 'equipment',
  loadChildren: () => EquipmentModule
});


/* customerResourceRoutes[2].children.push({
  path: 'forms',
  loadChildren: () => FormioFormsModule
});*/



@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(customerResourceRoutes)

  ],
  declarations: [CustomerCreateComponent, CustomerResourceComponent, CustomerViewComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'customer',
        form: 'customer',
        parents: ['dealer']
      }
    }
  ]
})
export class CustomerModule { }
