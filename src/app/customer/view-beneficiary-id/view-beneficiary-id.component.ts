import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryDto } from 'src/app/DTO/beneficiary-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-view-beneficiary-id',
  templateUrl: './view-beneficiary-id.component.html',
  styleUrls: ['./view-beneficiary-id.component.css']
})
export class ViewBeneficiaryIdComponent {

  __customerService:CustomerService;
  router:Router;
  allBeneficiaries: BeneficiaryDto[] = [];
  
  constructor(
    ___customerService:CustomerService,
    router:Router
  ){
      this.__customerService=___customerService;
      this.router=router;
  }
  
  ngOnInit(): void {
      this.getAllBeneficiaryRelatedToAccount();
  }
      
  getAllBeneficiaryRelatedToAccount(){
    let accNum = localStorage.getItem('accountId');
    if(accNum != null){
      this.__customerService.doFindBeneficiaryByID(parseInt(accNum)).subscribe(
        (data)=>{
          this.allBeneficiaries = data;
        },
        (err)=>{
          console.log(err.err);
          console.log(err.message);
        });
    }
  }

  createJsonForBeneficiary(beneficiary: BeneficiaryDto){
      this.__customerService.dodeleteBeneficiary(beneficiary.beneficiaryId).subscribe(
        (data) => {
          console.log(data);
          alert("Beneficiary Deleted - "+beneficiary.beneficiaryId);
        },
        (err) => {
          console.log(err.err);
        }
      );
      this.ngOnInit();
  }
}
