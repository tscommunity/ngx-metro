import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { MetroFormGroup } from 'ngx-metro';
import {CustomGroupValidator} from './custom-group-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  public formGroup: UntypedFormGroup;

  constructor() {

    this.formGroup = new MetroFormGroup('reactive_demo', {
      email: new UntypedFormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
      password: new UntypedFormControl('', [Validators.required]),
      number: new UntypedFormControl(10, [Validators.min(5), Validators.max(30)]),
      password_confirm: new UntypedFormControl('', [Validators.required]),
      remember: new UntypedFormControl(false, [Validators.requiredTrue])
    }, [CustomGroupValidator.sameValues('password', 'password_confirm')]);
  }

  alert(value) {
    alert(JSON.stringify(value));
  }

  ngOnInit() {
  }

}
