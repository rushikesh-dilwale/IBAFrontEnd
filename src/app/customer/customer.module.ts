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
    RequestNewCardComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomerModule { }
