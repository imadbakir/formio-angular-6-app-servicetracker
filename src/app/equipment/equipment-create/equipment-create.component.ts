import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioAuthService } from 'angular-formio/auth';
import {
  FormioResourceCreateComponent,
  FormioResourceService,
  FormioResourceConfig
} from 'angular-formio/resource';
import FormioUtils from 'formiojs/utils';

@Component({
  selector: 'app-equipment-create',
  templateUrl: './equipment-create.component.html',
  styleUrls: ['./equipment-create.component.scss']
})
export class EquipmentCreateComponent extends FormioResourceCreateComponent implements OnInit {
  constructor(
    public service: FormioResourceService,
    public auth: FormioAuthService,
    public route: ActivatedRoute,
    public router: Router,
    public config: FormioResourceConfig
  ) {
    super(service, route, router, config);
  }

  ngOnInit() {
    super.ngOnInit();

    /*

    // Wait for the parent event to be loaded.
    this.service.resources['event'].resourceLoaded.then((event) => {

      // Wait for the contractor form to load.
      this.service.formLoaded.then((form) => {

        // If they wish to have a custom registration form.
        if (event.data.registrationForm) {
          const registerForm = FormioUtils.getComponent(form.components, 'registration', true);
          registerForm.src = this.service.formFormio.projectUrl + '/' + event.data.registrationForm;
        }

        // Wait for the current user to be loaded.
        this.auth.userReady.then((user) => {

          // Default the user data inside of the registration form.
          this.service.resource.data.registration = {data: user.data};

          // Tell our form to re-render the submission.
          this.service.refresh.emit({
            property: 'submission',
            value: this.service.resource
          });
        });
      });
    }); */
  }
}
