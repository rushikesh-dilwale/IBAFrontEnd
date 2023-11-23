import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyDto } from 'src/app/DTO/policy-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent {

  dto:PolicyDto = new PolicyDto(
    0,
    '',
    0,
    0,
    ''
  );

  newPremiumAmount:number|null=null;

  __adminService: AdminService;
  router: Router;
  constructor(__adminService: AdminService,router: Router){
    this.__adminService = __adminService;
    this.router = router;
  }

  onSubmit(){
    if(this.newPremiumAmount !== null){
      this.__adminService.updatePolicy(this.dto.policyNumber, this.newPremiumAmount).subscribe(
        (data)=>{
          localStorage.setItem('Updated Policy ',data+'');
          alert('Premium Amount Updated Successfully');
          this.router.navigate(['/adminhome']);
        },
        (err)=>{
          console.log('Policy Updation Error '+err);
        }
      )
    }
    
  }
}
