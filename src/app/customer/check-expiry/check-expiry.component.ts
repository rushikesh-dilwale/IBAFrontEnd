import { Component } from '@angular/core';
import { PolicyDto } from 'src/app/DTO/policy-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-check-expiry',
  templateUrl: './check-expiry.component.html',
  styleUrls: ['./check-expiry.component.css']
})
export class CheckExpiryComponent {
  pol_dto:PolicyDto = new PolicyDto(
    0,
    '',
    0,
    0,
    ''
  );

  expiryStatus: string | null = null;

  __customerService: CustomerService;

  constructor(__customerService: CustomerService){
    this.__customerService = __customerService;
  }

  onSubmit(){
    this.__customerService.checkExpiryOfPolicy(this.pol_dto.policyNumber).subscribe(
      (data)=>{
        this.expiryStatus = data.str;
        alert('Policy Expiry Status - '+this.expiryStatus);
        localStorage.setItem('Policy Number ',data.policyNumber+'');
      },
      (err) => {
        console.log('Error'+err.err);
        console.log(err.message);
        
      }
    )
  }


}
