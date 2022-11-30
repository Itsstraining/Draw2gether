import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisRoutingModule } from './login-regis-routing.module';
import { LoginRegisComponent } from './login-regis.component';
import { BodyComponent } from './components/body/body.component';


@NgModule({
  declarations: [
    LoginRegisComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    LoginRegisRoutingModule
  ]
})
export class LoginRegisModule { }
