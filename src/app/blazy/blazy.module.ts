import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlazyRoutingModule } from './blazy-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ListbComponent } from './listb/listb.component';


@NgModule({
  declarations: [
    ListaComponent,
    ListbComponent
  ],
  imports: [
    CommonModule,
    BlazyRoutingModule
  ]
})
export class BlazyModule { }
