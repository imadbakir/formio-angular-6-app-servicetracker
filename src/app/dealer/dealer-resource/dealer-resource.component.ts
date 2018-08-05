import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-dealer-resource',
  templateUrl: './dealer-resource.component.html',
  styleUrls: ['./dealer-resource.component.scss']
})
export class DealerResourceComponent extends FormioResourceComponent implements OnInit {
  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
