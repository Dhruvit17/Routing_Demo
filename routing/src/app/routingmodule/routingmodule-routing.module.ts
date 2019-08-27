import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Temp1Component } from './Component/temp1/temp1.component';

const routes: Routes = [
  {
    path : '',
    component : Temp1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingmoduleRoutingModule { }
