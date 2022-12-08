import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/login-regis/login-regis.module').then(m => m.LoginRegisModule) }, 
{ path: 'main-jam', loadChildren: () => import('./pages/main-jam/main-jam.module').then(m => m.MainJamModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
