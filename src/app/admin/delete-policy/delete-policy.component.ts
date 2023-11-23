import { Component } from '@angular/core';
import { PolicyDto } from 'src/app/DTO/policy-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent {

  dto:PolicyDto = new PolicyDto(
    0,
    '',
    0,
    0,
    ''
  );

  __adminService: AdminService;
  constructor(__adminService: AdminService){
    this.__adminService = __adminService;
  }

  onSubmit(){
    this.__adminService.deletePolicy(this.dto.policyNumber).subscribe(
      (data)=>{
        this.dto =data;
      },
      (err) => {
        console.log('Policy Deletion Error '+err.err);
        console.log(err.msg);
        
      }
    )
  }

}
