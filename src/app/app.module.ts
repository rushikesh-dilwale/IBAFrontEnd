import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './LoginModule/registration/registration.component';
import { LoginPageComponent } from './LoginModule/login-page/login-page.component';
import { ForgotPasswordComponent } from './LoginModule/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { HomeComponantComponent } from './LoginModule/home-componant/home-componant.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerComponent } from './customer/home-customer/customer.component';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { CreateDebitCardComponent } from './admin/create-debit-card/create-debit-card.component';
import { ChangePinComponent } from './customer/change-pin/change-pin.component';
import { CheckExpiryComponent } from './customer/check-expiry-component/check-expiry-component.component';
import { CreatePolicyComponent } from './admin/create-policy/create-policy.component';
import { UpdatePolicyComponent } from './admin/update-policy/update-policy.component';
import { DeletePolicyComponent } from './admin/delete-policy/delete-policy.component';
import { AllPolicyComponent } from './admin/all-policy/all-policy.component';
import { FetchPolicyComponent } from './admin/fetch-policy/fetch-policy.component';
import { LinkPolicyComponent } from './customer/link-policy/link-policy.component';
import { CheckExpiryComponent } from './customer/check-expiry/check-expiry.component';

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
    CreateDebitCardComponent,
    ChangePinComponent,
    CheckExpiryComponent
    CreatePolicyComponent,
    UpdatePolicyComponent,
    DeletePolicyComponent,
    AllPolicyComponent,
    FetchPolicyComponent,
    LinkPolicyComponent,
    CheckExpiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    CustomerModule, AdminModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
