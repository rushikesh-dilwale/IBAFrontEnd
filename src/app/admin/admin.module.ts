import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetallaccountsComponent } from './getallaccounts/getallaccounts.component';
import { GetaccountbyIdComponent } from './getaccountby-id/getaccountby-id.component';
import { FormsModule } from '@angular/forms';
import { ApproveAccountsComponent } from './approve-accounts/approve-accounts.component';
import { ApproveCardComponent } from './approve-card/approve-card.component';

@NgModule({
  declarations: [
    GetallaccountsComponent,
    GetaccountbyIdComponent,
    ApproveAccountsComponent,
    ApproveCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
