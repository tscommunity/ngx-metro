import {Component, Input, OnInit} from '@angular/core';
import { FormStyle, MetroFormGroup } from '../metro-form-group';
import { MetroFormControl } from '../metro-form-control';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'm4-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  @Input() formGroup: MetroFormGroup;

  formStyle: FormStyle;
  dynamicControls: MetroFormControl<any>[];

  constructor() { }

  ngOnInit() {
    this.formStyle = this.formGroup.formStyle;

    this.dynamicControls = Object.keys(this.formGroup.controls)
      .map((key: string, index: number) => {
        const control: AbstractControl = this.formGroup.controls[key];

        if (control instanceof MetroFormControl) {
          control.fieldName = key;
          control.index = index;
          return control;
        }
      })
      .filter((control: MetroFormControl<any>) => !!control);
  }

}
