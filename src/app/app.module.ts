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
import { AdminHomeComponent } from './User/admin-home/admin-home.component';
import { CustomerComponent } from './User/customer/customer.component';
import { BeneficiaryComponent } from './User/customer/beneficiary/beneficiary.component';
import { PolicyComponent } from './User/customer/policy/policy.component';
import { TransactionComponent } from './User/customer/transaction/transaction.component';
import { DebitCardComponent } from './User/customer/debit-card/debit-card.component';
import { NomineeComponent } from './User/customer/nominee/nominee.component';


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
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
