import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './LoginModule/login-page/login-page.component';
import { RegistrationComponent } from './LoginModule/registration/registration.component';
import { ForgotPasswordComponent } from './LoginModule/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './LoginModule/reset-password/reset-password.component';
import { HomeComponantComponent } from './LoginModule/home-componant/home-componant.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerComponent } from './customer/home-customer/customer.component';
import { CreateNewAccountComponent } from './customer/create-new-account/create-new-account.component';
import { MyAccountComponent } from './customer/my-account/my-account.component';
import { GetallaccountsComponent } from './admin/getallaccounts/getallaccounts.component';
import { GetaccountbyIdComponent } from './admin/getaccountby-id/getaccountby-id.component';
import { AddNomineeComponent } from './customer/add-nominee/add-nominee.component';
import { ViewNomineeComponent } from './customer/view-nominee/view-nominee.component';
import { ViewNomineeIdComponent } from './customer/view-nominee-id/view-nominee-id.component';
import { ApproveAccountsComponent } from './admin/approve-accounts/approve-accounts.component';
import { DepositAmountsComponent } from './customer/deposit-amounts/deposit-amounts.component';
import { ViewBeneficiaryIdComponent } from './customer/view-beneficiary-id/view-beneficiary-id.component';
import { CreateBeneficiaryComponent } from './customer/create-beneficiary/create-beneficiary.component';
import { ApproveCardComponent } from './admin/approve-card/approve-card.component';
import { CreateDebitCardComponent } from './admin/create-debit-card/create-debit-card.component';

import { ChangePinComponent } from './customer/change-pin/change-pin.component';
import { RequestNewCardComponent } from './customer/request-new-card/request-new-card.component';
import { CheckExpiryComponent } from './customer/check-expiry/check-expiry.component';
import { UpdateAccountComponent } from './customer/update-account/update-account.component';
import { LinkPolicyComponent } from './customer/link-policy/link-policy.component';
import { DebitCheckExpiryComponent } from './customer/debit-check-expiry/debit-check-expiry.component';
import { AllPolicyComponent } from './admin/all-policy/all-policy.component';
import { FetchPolicyComponent } from './admin/fetch-policy/fetch-policy.component';
import { FetchCustPolicyComponent } from './customer/fetch-cust-policy/fetch-cust-policy.component';
import { CreatePolicyComponent } from './admin/create-policy/create-policy.component';
import { UpdatePolicyComponent } from './admin/update-policy/update-policy.component';
import { TransferMoneyComponent } from './customer/transfer-money/transfer-money.component';
import { TransactionBetweenComponent } from './customer/transaction-between/transaction-between.component';

const routes: Routes = [
  { path: "login", component:LoginPageComponent },
  { path: "register", component:RegistrationComponent },
  { path: "forgot", component:ForgotPasswordComponent },
  { path: "reset", component:ResetPasswordComponent },
  { path: "", component:HomeComponantComponent },
  { path: "adminhome", component:AdminHomeComponent },
  { path: 'customer', component: CustomerComponent },

  { path: 'register/account', component: CreateNewAccountComponent },
  { path: 'personal/account', component: MyAccountComponent },
  { path: 'admin/all/account', component: GetallaccountsComponent },
  { path: 'admin/id', component: GetaccountbyIdComponent },
  { path: 'customer/home', component: CustomerComponent },

  { path: 'admin/approve', component: ApproveAccountsComponent },
  { path: 'beneficiary', component: CreateBeneficiaryComponent},
  { path: 'view/beneficiary', component: ViewBeneficiaryIdComponent},
  { path: 'customer/update', component: UpdateAccountComponent },

  { path: 'admin/approve/card', component: ApproveCardComponent },
  { path: 'create-debit-card', component: CreateDebitCardComponent},
  { path: 'customer/change-pin', component: ChangePinComponent},
  { path: 'customer/request-new-card', component: RequestNewCardComponent},
  { path: 'debit-check-expiry', component: DebitCheckExpiryComponent},
  
  { path: 'create-policy', component: CreatePolicyComponent},
  { path: 'update-policy', component: UpdatePolicyComponent},
  { path: 'all-policy-by-accnum', component: AllPolicyComponent},
  { path: 'fetch-policy', component: FetchPolicyComponent},
  { path: 'customer/check-expiry', component: CheckExpiryComponent},
  { path: 'link-policy', component: LinkPolicyComponent},
  { path: 'fetch-cust-policy', component:FetchCustPolicyComponent},
   
  
  { path: 'customer/nominee',component:AddNomineeComponent},
  { path: 'normalUser/viewNominee',component:ViewNomineeComponent},
  { path: 'normalUser/viewNomineeById',component:ViewNomineeIdComponent},
  { path: 'customer/deposit1',component:DepositAmountsComponent},
  { path: 'admin/approve', component: ApproveAccountsComponent },
  { path: 'normalUser/listAllTransaction',component:TransactionBetweenComponent},
  { path: 'customer/transferMoney',component:TransferMoneyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
