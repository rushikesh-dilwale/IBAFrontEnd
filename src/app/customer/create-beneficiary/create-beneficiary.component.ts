import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryDto } from 'src/app/DTO/beneficiary-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-create-beneficiary',
  templateUrl: './create-beneficiary.component.html',
  styleUrls: ['./create-beneficiary.component.css']
})
export class CreateBeneficiaryComponent {

  dto: BeneficiaryDto = new BeneficiaryDto(
    0,
    '',
    0,
    '',
    '');

    __customerService: CustomerService;
  router: Router;
  constructor(__customerService: CustomerService,router: Router){
    this.__customerService = __customerService;
    this.router = router;
  }

  doSubmit(){
    this.__customerService.doCreateBeneficiary(this.dto).subscribe(
      (data)=>{
        this.dto = data;
        let accountid = localStorage.getItem('accountId');
        if(accountid != null){
          this.__customerService.dolinkBeneficiarywithAccount(parseInt(accountid),data.beneficiaryId).subscribe(
            (data)=>{
              alert("Beneficiary Added : "+data.beneficiaryId);
              this.router.navigateByUrl("/customer/home");
            },
            (err)=>{
              console.log('Beneficiary Creation Error '+err.err);
              console.log(err.message);
            }
          );
        } 
      },
      (err)=>{
        console.log(err.err);
        console.log(err.message);
      });
  }
}
