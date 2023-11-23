import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyDto } from 'src/app/DTO/policy-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent {
  dto:PolicyDto = new PolicyDto(
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

  onSubmit(){
    this.__adminService.registerPolicy(this.dto).subscribe(
      (data)=>{
        localStorage.setItem('policyNumber',data.policyNumber+'');
        alert('Policy Saved Successfully');
        this.router.navigate(['/adminhome'])
      },
      (err) => {
        console.log('Policy Creation Error '+err);
      }
    )

  }
}
