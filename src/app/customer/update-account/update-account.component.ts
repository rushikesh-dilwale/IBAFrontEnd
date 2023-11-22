import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent {

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
  router: Router;
  constructor(__adminService: AdminService,router: Router){
    this.__adminService = __adminService;
    this.router = router;
  }

  doSubmit(accType:string){
    console.log(this.dto+' - account type '+accType);
    
    if(accType == "saving"){
      this.__adminService.doSavingAccountRegistration(this.dto).subscribe(
        (data) => {
          console.log('Account Added. Account Num - '+data.accountId);
          localStorage.setItem("accountId",data.accountId+'');
  
          // ---- code to link account with user id 
          let usercode = localStorage.getItem('userID');
          if(usercode != null)
          {
            this.__adminService.doAccountLinkWithid(data.accountId,parseInt(usercode)).
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
      this.__adminService.doCurrentAccountRegistration(this.dto).subscribe(
        (data) => {
          console.log('Account Added. Account Num - '+data.accountId);
          localStorage.setItem("accountId",data.accountId+'');
  
          // ---- code to link account with user id 
          let usercode = localStorage.getItem('userID');
          if(usercode != null)
          {
            this.__adminService.doAccountLinkWithid(data.accountId,parseInt(usercode)).
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
