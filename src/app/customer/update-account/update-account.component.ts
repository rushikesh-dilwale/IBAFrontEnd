import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

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
  constructor(__customerService: CustomerService,router: Router){
    this.__customerService = __customerService;
    this.router = router;
  }

  ngOnInit(): void {
    this.loadData();
  }

  doSubmitForm(accType:string){
    console.log(this.dto+' - account type '+accType);
    let accId = localStorage.getItem("accountId");
    if(accId != null && accType == "saving"){
      this.__customerService.doUpdateSavingAccount(parseInt(accId),this.dto).subscribe(
        (data) => {
          console.log('Saving Account Updated. Account Num - '+ data.accountId);
          this.router.navigateByUrl("/customer/home");
        },
        (err) => {
          console.log('Saving Account Updation Error '+err);
        }
      )
    } else if(accId != null && accType == "current"){
      this.__customerService.doUpdateCurrentAccount(parseInt(accId),this.dto).subscribe(
        (data) => {
          console.log('Current Account Updated. Account Num - '+data.accountId);
          this.router.navigateByUrl("/customer/home");
        },
        (err) => {
          console.log('Current Account Updation Error '+err);
        }
      )
    }
  }

  loadData(){
    let accId = localStorage.getItem("accountId");
    if(accId != null){
      this.__customerService.dogetAccountById(parseInt(accId)).subscribe(
        (data) => {
          this.dto = data;
          console.log("Do get account by id works.");
        }, 
        (err) => {
          console.log(err.err);
          console.log(err.message);        
        });
    }
  }

}
