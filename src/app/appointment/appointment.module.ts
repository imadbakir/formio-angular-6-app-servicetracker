import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { AppointmentResourceComponent } from './appointment-resource/appointment-resource.component';
import { ParticipantModule } from './participant/participant.module';

const appointmentResourceRoutes: Routes = FormioResourceRoutes({
  view: AppointmentViewComponent,
  resource: AppointmentResourceComponent
});

appointmentResourceRoutes[2].children.push({
  path: 'participant',
  loadChildren: () => ParticipantModule
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(appointmentResourceRoutes)
  ],
  declarations: [AppointmentViewComponent, AppointmentResourceComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'appointment',
        form: 'appointment'
      }
    }
  ]
})
export class AppointmentModule { }
