import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './LoginModule/login-page/login-page.component';
import { RegistrationComponent } from './LoginModule/registration/registration.component';
import { ForgotPasswordComponent } from './LoginModule/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { HomeComponantComponent } from './LoginModule/home-componant/home-componant.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerComponent } from './customer/home-customer/customer.component';
import { CreateNewAccountComponent } from './customer/create-new-account/create-new-account.component';
import { MyAccountComponent } from './customer/my-account/my-account.component';
import { GetallaccountsComponent } from './admin/getallaccounts/getallaccounts.component';
import { GetaccountbyIdComponent } from './admin/getaccountby-id/getaccountby-id.component';
import { ApproveAccountsComponent } from './admin/approve-accounts/approve-accounts.component';

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
  { path: 'customer', component: CustomerComponent },
  { path: 'register/account', component: CreateNewAccountComponent },
  { path: 'personal/account', component: MyAccountComponent },
  { path: 'admin/all/account', component: GetallaccountsComponent },
  { path: 'admin/id', component: GetaccountbyIdComponent },
  { path: 'customer/home', component: CustomerComponent },
  { path: 'admin/approve', component: ApproveAccountsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
