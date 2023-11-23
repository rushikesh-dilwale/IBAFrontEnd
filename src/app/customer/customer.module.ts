import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { FormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { ViewNomineeIdComponent } from './view-nominee-id/view-nominee-id.component';
import { AddNomineeComponent } from './add-nominee/add-nominee.component';
import { DepositAmountsComponent } from './deposit-amounts/deposit-amounts.component';
import { ViewNomineeComponent } from './view-nominee/view-nominee.component';
import { RequestNewCardComponent } from './request-new-card/request-new-card.component';
import { ViewBeneficiaryIdComponent } from './view-beneficiary-id/view-beneficiary-id.component';
import { CreateBeneficiaryComponent } from './create-beneficiary/create-beneficiary.component';
import { CheckExpiryComponent } from './check-expiry/check-expiry.component';
import { DebitCheckExpiryComponent } from './debit-check-expiry/debit-check-expiry.component';
import { ChangePinComponent } from './change-pin/change-pin.component';
import { LinkPolicyComponent } from './link-policy/link-policy.component';


@NgModule({
  declarations: [
    CreateNewAccountComponent,
    MyAccountComponent,
    UpdateAccountComponent,
    ViewNomineeIdComponent,
    AddNomineeComponent,
    UpdateAccountComponent,
    DepositAmountsComponent,
    ViewNomineeComponent,
    RequestNewCardComponent,
    CreateBeneficiaryComponent,
    ViewBeneficiaryIdComponent,
    CheckExpiryComponent,
    DebitCheckExpiryComponent,
    ChangePinComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomerModule { }
