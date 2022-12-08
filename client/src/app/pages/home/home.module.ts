import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeNavbarComponent } from './navbar/home_navbar.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
