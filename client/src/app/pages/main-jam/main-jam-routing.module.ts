import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainJamComponent } from './main-jam.component';

const routes: Routes = [{ path: '', component: MainJamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainJamRoutingModule { }
