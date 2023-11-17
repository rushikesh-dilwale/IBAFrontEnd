import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './LoginModule/login-page/login-page.component';
import { RegistrationComponent } from './LoginModule/registration/registration.component';
import { ForgotPasswordComponent } from './LoginModule/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { HomeComponantComponent } from './LoginModule/home-componant/home-componant.component';
import { AdminHomeComponent } from './User/admin-home/admin-home.component';
import { CustomerComponent } from './User/customer/customer.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginPageComponent
  },{
    path:"register",
    component:RegistrationComponent
  },{
    path:"forgot",
    component:ForgotPasswordComponent
  },{
   path:"reset",
   component:ResetPasswordComponent
  },{
    path:"userHome",
    component:HomeComponantComponent
  },{
    path:"adminhome",
    component:AdminHomeComponent
  },
  { path: 'customer', component: CustomerComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
