import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{
    path :'',  
    component:Component1Component,
    canActivate:[AuthGuard],
    children:[
      {
        path : '',
        pathMatch : 'full',
        redirectTo : 'component2'
      }
      ,
      {
      path:'component2',
      component:Component2Component,
      children:[{
        path:'',
        pathMatch:'full',
    
      }]
    }
    ]
},
{
  path : 'second',
  loadChildren : './routingmodule/routingmodule.module#RoutingmoduleModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
