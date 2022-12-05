import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainJamRoutingModule } from './main-jam-routing.module';
import { MainJamComponent } from './main-jam.component';
import { BodyComponent } from './components/body/body.component';
import { MainJamNavbarComponent } from './components/main-jam-navbar/main-jam-navbar.component';


@NgModule({
  declarations: [
    MainJamComponent,
    BodyComponent,
    MainJamNavbarComponent,


  ],
  imports: [
    CommonModule,
    MainJamRoutingModule,

  ]
})
export class MainJamModule { }
