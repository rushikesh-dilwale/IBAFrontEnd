import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './LoginModule/registration/registration.component';
import { LoginPageComponent } from './LoginModule/login-page/login-page.component';
import { ForgotPasswordComponent } from './LoginModule/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { HomeComponantComponent } from './LoginModule/home-componant/home-componant.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerComponent } from './customer/home-customer/customer.component';
import { BeneficiaryComponent } from './customer/beneficiary/beneficiary.component';
import { PolicyComponent } from './customer/policy/policy.component';
import { TransactionComponent } from './customer/transaction/transaction.component';
import { DebitCardComponent } from './customer/debit-card/debit-card.component';
import { NomineeComponent } from './customer/nominee/nominee.component';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomeComponantComponent,
    AdminHomeComponent,
    CustomerComponent,
    BeneficiaryComponent,
    PolicyComponent,
    TransactionComponent,
    DebitCardComponent,
    NomineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    CustomerModule, AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
