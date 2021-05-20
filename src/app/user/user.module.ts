import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component'; //import component
import { LoginComponent } from './login/login.component'; //import component 



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent, //export component to app.module.ts
    SignupComponent //export component to app.module.ts
  ]
})
export class UserModule { }
