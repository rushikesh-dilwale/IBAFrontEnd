import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { FormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddNomineeComponent } from './add-nominee/add-nominee.component';
import { ViewNomineeComponent } from './view-nominee/view-nominee.component';
import { ViewNomineeIdComponent } from './view-nominee-id/view-nominee-id.component';
import { DepositAmountComponent } from './deposit-amount/deposit-amount.component';




@NgModule({
  declarations: [
    CreateNewAccountComponent,
    MyAccountComponent,
    AddNomineeComponent,
    ViewNomineeComponent,
    ViewNomineeIdComponent,
    DepositAmountComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomerModule { }
