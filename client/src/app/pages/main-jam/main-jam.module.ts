import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainJamRoutingModule } from './main-jam-routing.module';
import { MainJamComponent } from './main-jam.component';
import { BodyComponent } from './components/body/body.component';
import { MainJamNavbarComponent } from './components/main-jam-navbar/main-jam-navbar.component';
import { MaterialsModule } from 'src/app/modules/materials/materials.module';
import { TopToolsComponent } from './components/body/top-tools/top-tools.component';




@NgModule({
  declarations: [
    MainJamComponent,
    BodyComponent,
    MainJamNavbarComponent,
    TopToolsComponent,


  ],
  imports: [
    CommonModule,
    MainJamRoutingModule,
    MaterialsModule

  ]
})
export class MainJamModule { }
