import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaComponent} from './lista/lista.component';
import {ListbComponent} from './listb/listb.component';

const routes: Routes = [
  {path:'lista', component:ListaComponent},
  {path:'listb', component:ListbComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlazyRoutingModule { }
