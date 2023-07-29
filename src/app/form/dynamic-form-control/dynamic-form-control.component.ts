import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import { InputComponent, MetroFormControl } from 'ngx-metro';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.less']
})
export class DynamicFormControlComponent implements OnInit {
  public formControl: MetroFormControl<InputComponent>;
  public formControlInital: MetroFormControl<InputComponent>;
  public formControlValidators: MetroFormControl<InputComponent>;
  public formControlOptions: MetroFormControl<InputComponent>;
  public formControlStyle: MetroFormControl<InputComponent>;

  constructor() {
    this.formControl = new MetroFormControl(InputComponent);
    this.formControlInital = new MetroFormControl(InputComponent, 'This is the value');
    this.formControlValidators = new MetroFormControl(InputComponent, null, [ Validators.required ], [ /* Async validators */ ]);
    this.formControlOptions = new MetroFormControl(InputComponent, null, null, null,
      { prepend: 'Prepend', append: 'Append' });
    this.formControlStyle = new MetroFormControl(
      InputComponent, null, [ Validators.required ], null, null,
      { createError: (error: string) => 'Something missing?' });
  }

  ngOnInit() {
  }

}
