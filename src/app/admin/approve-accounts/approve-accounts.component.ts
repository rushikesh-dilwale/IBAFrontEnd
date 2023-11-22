import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { AccountStatusUpdate } from 'src/app/DTO/account-status-update';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-approve-accounts',
  templateUrl: './approve-accounts.component.html',
  styleUrls: ['./approve-accounts.component.css']
})
export class ApproveAccountsComponent implements OnInit{
  allAccounts: AccountResponseDTO[] = [];
  __adminService: AdminService;
  status: AccountStatusUpdate = new AccountStatusUpdate('');

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

  createJsonForAccount(account: AccountResponseDTO){
      this.status.accountStatus = "APPROVED";
      this.__adminService.doApproveAccount(account.accountId, this.status).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err.err);
        }
      );
      this.ngOnInit();
  }
}


