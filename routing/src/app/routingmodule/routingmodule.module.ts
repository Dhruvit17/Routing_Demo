import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingmoduleRoutingModule } from './routingmodule-routing.module';
import { Temp1Component } from './Component/temp1/temp1.component';

@NgModule({
  declarations: [Temp1Component],
  imports: [
    CommonModule,
    RoutingmoduleRoutingModule
  ]
})
export class RoutingmoduleModule { }
