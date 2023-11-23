import { Component, OnInit } from '@angular/core';
import { PolicyDto } from 'src/app/DTO/policy-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-fetch-policy',
  templateUrl: './fetch-policy.component.html',
  styleUrls: ['./fetch-policy.component.css']
})
export class FetchPolicyComponent implements OnInit {

  allPolicies: PolicyDto[] = [];
  __adminService: AdminService;


  constructor(
    __adminService: AdminService
  ){
    this.__adminService = __adminService
  }
  ngOnInit(): void {
    this.doLoad()
  }

  doLoad(){
    this.__adminService.getAllPolicy().subscribe(
      (data) => {
        this.allPolicies = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  doDeleteOnClick(policy:PolicyDto){
    this.__adminService.deletePolicy(policy.policyNumber).subscribe(
      (data) =>{
        console.log(data);
      },
      (err)=>{
        console.log(err.err);
      }
    );
    this.ngOnInit();
  }
}

  
