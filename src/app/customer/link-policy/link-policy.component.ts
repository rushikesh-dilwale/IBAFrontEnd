import { Component } from '@angular/core';
import { AccountResponseDTO } from 'src/app/DTO/account-response-dto';

import { PolicyDto } from 'src/app/DTO/policy-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-link-policy',
  templateUrl: './link-policy.component.html',
  styleUrls: ['./link-policy.component.css']
})
export class LinkPolicyComponent {
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

  pol_dto:PolicyDto = new PolicyDto(
    0,
    '',
    0,
    0,
    ''
  );



  __customerService: CustomerService;

  constructor(__customerService: CustomerService){
    this.__customerService = __customerService;
  }

  onSubmit(){
    this.__customerService.allocatePolicy(this.pol_dto.policyNumber,this.dto.accountId).subscribe(
      (data)=>{
        localStorage.setItem('Account Number ',data.accountId+'');
        console.log('Policy Allocated ',data);
        
      },
      (err) => {
        console.log('Error'+err);
      }
    )
  }
}
