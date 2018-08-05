import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-appointment-resource',
  templateUrl: './appointment-resource.component.html',
  styleUrls: ['./appointment-resource.component.scss']
})
export class AppointmentResourceComponent extends FormioResourceComponent implements OnInit {
  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
