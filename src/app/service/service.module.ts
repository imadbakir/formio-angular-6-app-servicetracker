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
import { ServiceViewComponent } from './service-view/service-view.component';
const serviceResourceRoutes: Routes = FormioResourceRoutes({
  view: ServiceViewComponent,
});







@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(serviceResourceRoutes)

  ],
  declarations: [ServiceViewComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'Service',
        form: 'Service',
        parents: ['appointment']
      }
    }
  ]
})
export class ServiceModule { }
