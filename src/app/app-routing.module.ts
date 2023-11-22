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
import { AddNomineeComponent } from './customer/add-nominee/add-nominee.component';
import { ViewNomineeComponent } from './customer/view-nominee/view-nominee.component';
import { ViewNomineeIdComponent } from './customer/view-nominee-id/view-nominee-id.component';
import { DepositAmountComponent } from './customer/deposit-amount/deposit-amount.component';

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
  {path:'customer/nominee',component:AddNomineeComponent},
  {path:'normalUser/viewNominee',component:ViewNomineeComponent},
  {path:'normalUser/viewNomineeById',component:ViewNomineeIdComponent},
  {path:'customer/deposit1',component:DepositAmountComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
