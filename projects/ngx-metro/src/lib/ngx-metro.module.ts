import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMetroFormsModule } from './form/ngx-metro-forms.module';
import { NgxMetroBaseModule } from './base/ngx-metro-base.module';
import { NgxMetroControlsModule } from './controls/ngx-metro-controls.module';
import { NgxMetroInformationModule } from './information/ngx-metro-information.module';
import 'metro4';

const imports = [
  NgxMetroBaseModule,
  NgxMetroFormsModule,
  NgxMetroControlsModule,
  NgxMetroInformationModule
];

@NgModule({
  imports: [
    CommonModule,
    ...imports
  ],
  declarations: [

  ],
  exports: [
    ...imports,
  ],
  providers: [

  ]
})
export class NgxMetroModule {
}
