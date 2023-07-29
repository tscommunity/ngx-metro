import { Component, OnInit } from '@angular/core';
import { MetroFormGroup } from 'ngx-metro';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-control-wrapper',
  templateUrl: './form-control-wrapper.component.html',
  styleUrls: ['./form-control-wrapper.component.less']
})
export class FormControlWrapperComponent implements OnInit {
  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new MetroFormGroup('form_control_wrapper', {
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

}
