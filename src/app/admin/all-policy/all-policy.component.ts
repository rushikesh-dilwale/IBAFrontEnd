import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { PolicyDto } from 'src/app/DTO/policy-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-all-policy',
  templateUrl: './all-policy.component.html',
  styleUrls: ['./all-policy.component.css']
})
export class AllPolicyComponent {
  account: AccountResponseDTO = new AccountResponseDTO(
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

  accId:number=0;

  dto:PolicyDto[] = [];

  __adminService: AdminService;
  constructor(___adminService: AdminService){
    this.__adminService = ___adminService;
  }

  doLoad(accountId:number){
    this.__adminService.getPolicyByAccNum(accountId).subscribe(
      (data) => {
        this.dto = data;
      }, 
      (err) => {
        console.log(err.err);
        console.log(err.message);
      });
  }
  
}
