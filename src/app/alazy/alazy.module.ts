import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlazyRoutingModule } from './alazy-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ListbComponent } from './listb/listb.component';


@NgModule({
  declarations: [
    ListaComponent,
    ListbComponent
  ],
  imports: [
    CommonModule,
    AlazyRoutingModule
  ]
})
export class AlazyModule { }
