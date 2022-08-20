import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrRoutingModule } from './parametr-routing.module';
import { ParametrComponent } from './parametr.component';
import {ShareModule} from "../../share/share.module";


@NgModule({
  declarations: [
    ParametrComponent
  ],
  imports: [
    CommonModule,
    ParametrRoutingModule,
    ShareModule
  ]
})
export class ParametrModule { }
