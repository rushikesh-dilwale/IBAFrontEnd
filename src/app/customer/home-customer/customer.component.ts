import { Component, NgModule, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminService } from 'src/app/Service/admin.service';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';

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
    __adminService: AdminService;

    constructor(
      ___adminService: AdminService
    ){
      this.__adminService = ___adminService;
    }

    ngOnInit() {
      this.dofindaccountbyuserid();
    }

    dofindaccountbyuserid(): void {
      let id = localStorage.getItem("userID");
      console.log(id);

      if (id !== null) {
        let userId = parseInt(id);
        this.__adminService.dogetRegisteredAccount(userId).subscribe(
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

