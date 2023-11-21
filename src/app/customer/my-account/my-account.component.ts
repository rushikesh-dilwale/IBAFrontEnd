import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountBasicDTO } from 'src/app/DTO/account-basic-dto';
import { AdminService } from 'src/app/Service/admin.service';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{

    ngOnInit(): void {
      this.doShowMyAccount()
    }

    dto: AccountResponseDTO = new AccountResponseDTO(
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

    __adminService: AdminService;
    router: Router;

    constructor(
      ___adminService: AdminService,
      router: Router
    ){
      this.__adminService = ___adminService;
      this.router = router;
    }

    doShowMyAccount(){
      let id = localStorage.getItem("userID");
      console.log(id);
      if (id !== null) {
        let userId = parseInt(id);
        this.__adminService.dogetRegisteredAccount(userId).subscribe(
          (data) => {
            console.log("inside data "+data);
            this.dto = data;
            localStorage.setItem("accountId",data.accountId+'');
          }, 
          (err) => {
            console.log(err.error);
            console.log(err.statusText);
            console.log(err.message);
          }
        )
      } else {
        console.error("The 'id' from localStorage is null or undefined.");
      }
      }

}
