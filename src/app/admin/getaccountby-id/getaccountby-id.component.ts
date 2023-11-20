import { Component } from '@angular/core';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-getaccountby-id',
  templateUrl: './getaccountby-id.component.html',
  styleUrls: ['./getaccountby-id.component.css']
})
export class GetaccountbyIdComponent {

  __adminService: AdminService;
  account: AccountResponseDTO = new AccountResponseDTO(
    0,
    '',
    '',
    '',
    0,
    '',
    0,
    0,
    ''
  );
  accId: number = 0;

  constructor(
    ___adminService: AdminService,
  ){
    this.__adminService = ___adminService;
  }

  doLoad(accountId: number){
    this.__adminService.dogetAccountById(accountId).subscribe(
      (data) => {
        this.account = data;
      }, 
      (err) => {
        console.log(err.err);
        console.log(err.message);
      });
  }
}
