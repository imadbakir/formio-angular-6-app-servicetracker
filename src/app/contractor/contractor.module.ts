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
import { ContractorCreateComponent } from './contractor-create/contractor-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      create: ContractorCreateComponent
    }))
  ],
  declarations: [ContractorCreateComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'contractor',
        form: 'contractor',
        parents: ['dealer']
      }
    }
  ]
})
export class ContractorModule { }
