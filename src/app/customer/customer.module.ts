import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNomineeComponent } from './add-nominee/add-nominee.component';
import { CheckExpiryComponent } from './check-expiry/check-expiry.component';
import { ChangePinComponent } from './change-pin/change-pin.component';
import { CreateBeneficiaryComponent } from './create-beneficiary/create-beneficiary.component';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { DebitCheckExpiryComponent } from './debit-check-expiry/debit-check-expiry.component';
import { DepositAmountsComponent } from './deposit-amounts/deposit-amounts.component';
import { FetchCustPolicyComponent } from './fetch-cust-policy/fetch-cust-policy.component';
import { CustomerComponent } from './home-customer/customer.component';
import { LinkPolicyComponent } from './link-policy/link-policy.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RequestNewCardComponent } from './request-new-card/request-new-card.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ViewBeneficiaryIdComponent } from './view-beneficiary-id/view-beneficiary-id.component';
import { ViewNomineeComponent } from './view-nominee/view-nominee.component';
import { ViewNomineeIdComponent } from './view-nominee-id/view-nominee-id.component';



@NgModule({
  declarations: [
    AddNomineeComponent,
    ChangePinComponent,
    CheckExpiryComponent,
    CreateBeneficiaryComponent,
    CreateNewAccountComponent,
    DebitCheckExpiryComponent,
    DepositAmountsComponent,
    FetchCustPolicyComponent,
    LinkPolicyComponent,
    MyAccountComponent,
    RequestNewCardComponent,
    UpdateAccountComponent,
    ViewBeneficiaryIdComponent,
    ViewNomineeComponent,
    ViewNomineeIdComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomerModule { }
