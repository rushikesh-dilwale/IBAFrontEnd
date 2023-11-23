import { Component, OnInit } from '@angular/core';
import { PolicyDto } from 'src/app/DTO/policy-dto';
import { AdminService } from 'src/app/Service/admin.service';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-fetch-cust-policy',
  templateUrl: './fetch-cust-policy.component.html',
  styleUrls: ['./fetch-cust-policy.component.css']
})
export class FetchCustPolicyComponent implements OnInit {

  allPolicies: PolicyDto[] = [];
  __adminService: AdminService;
  __customerService: CustomerService;

  constructor(
    __adminService: AdminService,
    __customerService: CustomerService
  ){
    this.__adminService = __adminService;
    this.__customerService = __customerService;
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

  buyPolicy(policy:PolicyDto){
    let accId = localStorage.getItem('accountId');
    if(accId !== null){
      this.__customerService.allocatePolicy(policy.policyNumber,parseInt(accId)).subscribe(
        (data)=>{
          console.log(data);
        },
        (err)=>{
          console.log(err.err);
        }
      )
    }
  }
}

  
