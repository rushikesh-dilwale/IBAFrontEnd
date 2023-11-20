import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountBasicDTO } from 'src/app/DTO/account-basic-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

    dto: AccountBasicDTO = new AccountBasicDTO(
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
        let userId = parseInt(id, 10);
        this.__adminService.dogetRegisteredAccount(userId).subscribe(
          (data) => {
            this.dto = data;
            localStorage.setItem("accountId",data.accountId+'');
          }, 
          (err) => {
            console.log('Error '+err);
          }
        )
      } else {
        console.error("The 'id' from localStorage is null or undefined.");
      }
      }

    
}
