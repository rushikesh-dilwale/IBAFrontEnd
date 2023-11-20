import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';
import { AccountBasicDTO } from 'src/app/DTO/account-basic-dto';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent {
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
  constructor(__adminService: AdminService,router: Router){
    this.__adminService = __adminService;
    this.router = router;
  }

  doSubmit(accType:string){
    console.log(this.dto+' - account type '+accType);
    this.__adminService.doAccountRegistration(this.dto).subscribe(
      (data) => {
        alert('Account Added. Account Num - '+data.accountId);
        localStorage.setItem("accountId",data.accountId+'');

         /* below code will be removed after login code */
        //localStorage.setItem("userId",data.accountId+'');

        if (data.accountHolderName != ''){
          this.dto = new AccountBasicDTO(0,'','','',0,'',0,0,'');
        }

        // ---- code to link account with user id 
        // let usercode = localStorage.getItem('userId');
        // if(usercode != null)
        // {
        //   this.__adminService.doAccountLinkWithid(parseInt(usercode),data.accountId).
        //   subscribe(data=>{
        //     alert("Account Openned : "+data.accountId);
        //   },
        //   err=>{

        //   })
       
        // }
       
      },
      (err) => {
        console.log('Error '+err);
      }
    )
  }
}
