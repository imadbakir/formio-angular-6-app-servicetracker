import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-contractor-resource',
  templateUrl: './contractor-resource.component.html',
  styleUrls: ['./contractor-resource.component.scss']
})
export class ContractorResourceComponent extends FormioResourceComponent implements OnInit {
  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
