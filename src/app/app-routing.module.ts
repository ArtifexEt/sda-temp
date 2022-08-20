import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./views/home/home.module')
      .then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./views/about/about.module')
      .then(m => m.AboutModule)
},
      { path: 'parametr', loadChildren: () => import('./views/parametr/parametr.module').then(m => m.ParametrModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
