import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-customer-resource',
  templateUrl: './customer-resource.component.html',
  styleUrls: ['./customer-resource.component.scss']
})
export class CustomerResourceComponent extends FormioResourceComponent implements OnInit {
  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
