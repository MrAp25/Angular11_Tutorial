import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component'; //import from admin component
import {ContactComponent} from './contact/contact.component';  //import from contact component
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'; //import from 404 page not found component

const routes: Routes = [{ //path for admin component
  path:'admin',
  component:AdminComponent
},
{ //path for contact component
  path:'contact',
  component:ContactComponent
},
{ 
  path:'alazy', loadChildren:()=>import('./alazy/alazy.module').then(mod=>mod.AlazyModule)
},
{
  path:'blazy', loadChildren:()=>import('./blazy/blazy.module').then(mod=>mod.BlazyModule)
},
{ //path for 404 page not found
  path:'**',
  component:PagenotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
