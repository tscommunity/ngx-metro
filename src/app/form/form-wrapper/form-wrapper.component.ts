import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { MetroFormGroup } from 'ngx-metro';
import {CustomGroupValidator} from '../form/custom-group-validator';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.less']
})
export class FormWrapperComponent implements OnInit {

  public formGroup: UntypedFormGroup;

  constructor() {
    this.formGroup = new MetroFormGroup('form_wrapper', {
      password: new UntypedFormControl('', [Validators.required]),
      password_confirm: new UntypedFormControl('', [Validators.required]),
    }, [CustomGroupValidator.sameValues('password', 'password_confirm')]);
  }

  ngOnInit() {
  }

}
