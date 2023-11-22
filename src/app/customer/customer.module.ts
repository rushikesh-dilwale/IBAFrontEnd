import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { FormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';



@NgModule({
  declarations: [
    CreateNewAccountComponent,
    MyAccountComponent,
    UpdateAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomerModule { }
