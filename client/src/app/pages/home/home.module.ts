import { JamJectComponent } from './../../components/jam-ject/jam-ject.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeNavbarComponent } from './navbar/home_navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    JamJectComponent,
    HomeNavbarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
