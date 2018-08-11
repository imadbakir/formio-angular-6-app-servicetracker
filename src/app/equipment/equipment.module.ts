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
import { EquipmentCreateComponent } from './equipment-create/equipment-create.component';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';
import { EquipmentResourceComponent } from './equipment-resource/equipment-resource.component';
const equipmentResourceRoutes: Routes = FormioResourceRoutes({
  view: EquipmentViewComponent,
});







@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(equipmentResourceRoutes)

  ],
  declarations: [EquipmentCreateComponent, EquipmentResourceComponent, EquipmentViewComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'equipment',
        form: 'equipment',
        parents: ['customer']
      }
    }
  ]
})
export class EquipmentModule { }
