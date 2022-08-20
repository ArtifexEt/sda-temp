import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrComponent } from './parametr.component';

const routes: Routes = [{ path: '', component: ParametrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrRoutingModule { }
