import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocComponentComponent} from './doc-component/doc-component.component';
import { NgxMetroModule } from 'ngx-metro';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
  declarations: [
    DocComponentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    NgxMetroModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    NgxMetroModule,
    DocComponentComponent,
  ]
})
export class SharedModule { }
