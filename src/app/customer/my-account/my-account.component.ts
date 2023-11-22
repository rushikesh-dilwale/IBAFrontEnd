import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { CustomerService } from 'src/app/Service/customer.service';

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
      '',
      ''
    );

    __customerService: CustomerService;
    router: Router;

    constructor(
      __customerService: CustomerService,
      router: Router
    ){
      this.__customerService = __customerService;
      this.router = router;
    }

    doShowMyAccount(){
      let id = localStorage.getItem("userID");
      console.log(id);
      if (id !== null) {
        let userId = parseInt(id);
        this.__customerService.dogetRegisteredAccount(userId).subscribe(
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
