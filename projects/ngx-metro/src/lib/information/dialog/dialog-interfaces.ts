import {EventEmitter} from '@angular/core';

export interface MetroDialogDataEmitter<T> {
  dialogDataEmitter: EventEmitter<T>;
}

export interface MetroDialogDataInput<T> {
  dialogDataInput: T;
}
