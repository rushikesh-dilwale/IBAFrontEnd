import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-approve-accounts',
  templateUrl: './approve-accounts.component.html',
  styleUrls: ['./approve-accounts.component.css']
})
export class ApproveAccountsComponent implements OnInit{
  allAccounts: AccountResponseDTO[] = [];
  __adminService: AdminService;
  dto: AccountResponseDTO = new AccountResponseDTO(
    0,
    '',
    '',
    '',
    0,
    '',
    0,
    0,
    '',
    ''
  );

  constructor(
    __adminService: AdminService
  ){
    this.__adminService = __adminService;
  }
  
  ngOnInit(): void {
    this.doLoad()
  }

  doLoad(){
    this.__adminService.dogetAllAccountsByStatus().subscribe(
      (data) => {
        this.allAccounts = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // createJsonForAccount(account: AccountResponseDTO): Observable<AccountResponseDTO>{
  //     var jsonobj = {
  //       accountId: account.accountId,
  //       accountHolderName: account.accountHolderName,
  //       phoneNo: account.phoneNo,
  //       emailId: account.emailId,
  //       age: account.age,
  //       gender: account.gender,
  //       balance: account.balance,
  //       dateOfOpening: account.dateOfOpening,
  //       accountStatus: account.accountStatus
  //     }
  //     return jsonobj;
  // }
  createJsonForAccount(account: AccountResponseDTO){}
}
