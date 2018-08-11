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
import { TimeclockViewComponent } from './timeclock-view/timeclock-view.component';
const timeclockResourceRoutes: Routes = FormioResourceRoutes({
  view: TimeclockViewComponent,
});







@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(timeclockResourceRoutes)

  ],
  declarations: [TimeclockViewComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'Timeclock',
        form: 'Timeclock',
        parents: ['appointment']
      }
    }
  ]
})
export class TimeclockModule { }
