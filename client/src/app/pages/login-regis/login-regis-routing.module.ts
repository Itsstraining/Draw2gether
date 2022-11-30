import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisComponent } from './login-regis.component';

const routes: Routes = [{ path: '', component: LoginRegisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisRoutingModule { }
