import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrRoutingModule } from './parametr-routing.module';
import { ParametrComponent } from './parametr.component';
import {ShareModule} from "../../share/share.module";
import { WynikComponent } from './wynik/wynik.component';


@NgModule({
  declarations: [
    ParametrComponent,
    WynikComponent
  ],
  imports: [
    CommonModule,
    ParametrRoutingModule,
    ShareModule
  ]
})
export class ParametrModule { }
