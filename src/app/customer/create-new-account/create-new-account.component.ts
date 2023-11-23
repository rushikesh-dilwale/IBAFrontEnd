import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent {

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

  doSubmit(accType:string){
    console.log(this.dto+' - account type '+accType);
    if(accType == "saving"){
      this.__customerService.doSavingAccountRegistration(this.dto).subscribe(
        (data) => {
          console.log('Account Added. Account Num - '+data.accountId);
          localStorage.setItem("accountId",data.accountId+'');
  
          // ---- code to link account with user id 
          let usercode = localStorage.getItem('userID');
          if(usercode != null)
          {
            this.__customerService.doAccountLinkWithid(data.accountId,parseInt(usercode)).
            subscribe((data)=>{
              alert("Account Openned : "+data.accountId);
              this.router.navigateByUrl("/customer/home");
            },
            (err)=>{
              console.log('Account Creation Error '+err.err);
            })
          }
        },
        (err) => {
          console.log('Account Creation Error '+err);
        }
      )
    } else if(accType == "current"){
      this.__customerService.doCurrentAccountRegistration(this.dto).subscribe(
        (data) => {
          console.log('Account Added. Account Num - '+data.accountId);
          localStorage.setItem("accountId",data.accountId+'');
  
          // ---- code to link account with user id 
          let usercode = localStorage.getItem('userID');
          if(usercode != null)
          {
            this.__customerService.doAccountLinkWithid(data.accountId,parseInt(usercode)).
            subscribe((data)=>{
              alert("Account Openned : "+data.accountId);
              this.router.navigateByUrl("/customer/home");
            },
            (err)=>{
              console.log('Account Creation Error '+err.err);
            })
          }
        },
        (err) => {
          console.log('Account Creation Error '+err);
        }
      )
    }
  }
}
