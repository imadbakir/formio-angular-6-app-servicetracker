import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      create: CustomerCreateComponent
    }))
  ],
  declarations: [CustomerCreateComponent],
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
