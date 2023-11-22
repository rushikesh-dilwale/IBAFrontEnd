import { Component, NgModule, OnInit } from '@angular/core';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
  
})
export class CustomerComponent implements OnInit{

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

    constructor(
      __customerService: CustomerService
    ){
      this.__customerService = __customerService;
    }

    ngOnInit() {
      this.dofindaccountbyuserid();
    }

    dofindaccountbyuserid(): void {
      let id = localStorage.getItem("userID");
      console.log(id);

      if (id !== null) {
        let userId = parseInt(id);
        this.__customerService.dogetRegisteredAccount(userId).subscribe(
          (data) => {
            this.dto = data;
            localStorage.setItem('accountId', this.dto.accountId.toString());
          },
          (err) => {
            console.log(err.err);
            console.log(err.message);
          });
          
      }
    }
}

