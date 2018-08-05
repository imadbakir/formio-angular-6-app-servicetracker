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
import { DealerViewComponent } from './dealer-view/dealer-view.component';
import { DealerResourceComponent } from './dealer-resource/dealer-resource.component';
import { CustomerModule } from '../customer/customer.module';
import { ContractorModule } from '../contractor/contractor.module';
const dealerResourceRoutes: Routes = FormioResourceRoutes({
  view: DealerViewComponent,
  resource: DealerResourceComponent
});


dealerResourceRoutes[2].children.push({
  path: 'customer',
  loadChildren: () => CustomerModule
});

dealerResourceRoutes[2].children.push({
  path: 'contractor',
  loadChildren: () => ContractorModule
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(dealerResourceRoutes)
  ],
  declarations: [DealerViewComponent, DealerResourceComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'dealer',
        form: 'dealer'
      }
    }
  ]
})
export class DealerModule { }
