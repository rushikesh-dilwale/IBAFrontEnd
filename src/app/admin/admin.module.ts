import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetallaccountsComponent } from './getallaccounts/getallaccounts.component';
import { GetaccountbyIdComponent } from './getaccountby-id/getaccountby-id.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GetallaccountsComponent,
    GetaccountbyIdComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
