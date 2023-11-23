import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetallaccountsComponent } from './getallaccounts/getallaccounts.component';
import { GetaccountbyIdComponent } from './getaccountby-id/getaccountby-id.component';
import { FormsModule } from '@angular/forms';
import { ApproveAccountsComponent } from './approve-accounts/approve-accounts.component';
import { ApproveCardComponent } from './approve-card/approve-card.component';
import { AllPolicyComponent } from './all-policy/all-policy.component';
import { CreateDebitCardComponent } from './create-debit-card/create-debit-card.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { DeletePolicyComponent } from './delete-policy/delete-policy.component';
import { FetchPolicyComponent } from './fetch-policy/fetch-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { ShowNomineeComponent } from './show-nominee/show-nominee.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';

@NgModule({
  declarations: [
    AllPolicyComponent,
    GetallaccountsComponent,
    GetaccountbyIdComponent,
    ApproveAccountsComponent,
    ApproveCardComponent,
    CreateDebitCardComponent,
    CreatePolicyComponent,
    DeletePolicyComponent,
    FetchPolicyComponent,
    UpdatePolicyComponent,
    ShowNomineeComponent,
    ListTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
