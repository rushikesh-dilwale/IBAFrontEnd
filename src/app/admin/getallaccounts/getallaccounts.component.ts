import { Component, OnInit } from '@angular/core';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-getallaccounts',
  templateUrl: './getallaccounts.component.html',
  styleUrls: ['./getallaccounts.component.css']
})
export class GetallaccountsComponent implements OnInit {

  allAccounts: AccountResponseDTO[] = [];
  __adminService: AdminService;

  constructor(
    __adminService: AdminService
  ){
    this.__adminService = __adminService;
  }
  ngOnInit(): void {
    this.doLoad()
  }

  doLoad(){
    this.__adminService.dogetAllAccounts().subscribe(
      (data) => {
        this.allAccounts = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
