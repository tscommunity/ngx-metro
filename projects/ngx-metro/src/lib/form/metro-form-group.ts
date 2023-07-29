import {AbstractControl, AbstractControlOptions, AsyncValidatorFn, UntypedFormGroup, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';

export interface FormStyle {
  title?: string|Observable<string>;
  description?: string|Observable<string>;
  hideErrors?: boolean;
  createError?: (error: string) => string|Observable<string>;
}

export class MetroFormGroup extends UntypedFormGroup {
  constructor(public name: string,
              controls: { [key: string]: AbstractControl; },
              validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
              public formStyle?: FormStyle) {
    super(controls, validatorOrOpts, asyncValidator);
  }
}
