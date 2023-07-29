import {Component, OnInit} from '@angular/core';
import { InputComponent, MetroFormControl, MetroFormGroup } from 'ngx-metro';
import {Validators} from '@angular/forms';
import {CustomGroupValidator} from '../form/custom-group-validator';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less']
})
export class FormBuilderComponent implements OnInit {
  formGroup: MetroFormGroup;
  formGroupValidation: MetroFormGroup;
  formGroupStyle: MetroFormGroup;

  constructor() {
    this.formGroup = new MetroFormGroup('form_name', {
      name: new MetroFormControl(InputComponent)
    });

    this.formGroupValidation = new MetroFormGroup('form_name', {
      name: new MetroFormControl(InputComponent, null, [Validators.required]),
      nameConfirm: new MetroFormControl(InputComponent, null, [Validators.required]),
    }, [ CustomGroupValidator.sameValues('name', 'nameConfirm') ]);

    this.formGroupStyle = new MetroFormGroup('form_name', {
      name: new MetroFormControl(InputComponent, null, [Validators.required]),
      nameConfirm: new MetroFormControl(InputComponent, null, [Validators.required]),
    }, [ CustomGroupValidator.sameValues('name', 'nameConfirm') ], null,
      { createError: (error: string) => 'Some errors occured', description: 'Custom form', title: 'Form title' });
  }

  ngOnInit() {
  }

}
