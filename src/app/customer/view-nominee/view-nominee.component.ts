import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NomineeDTO } from 'src/app/DTO/nominee-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-view-nominee',
  templateUrl: './view-nominee.component.html',
  styleUrls: ['./view-nominee.component.css']
})
export class ViewNomineeComponent implements OnInit {
  __customerService:CustomerService;
  router:Router;
  allNominees:NomineeDTO[] = [];
  
  constructor(
    ___customerService:CustomerService,
    router:Router
  ){
      this.__customerService=___customerService;
      this.router=router;
  }
  
  ngOnInit(): void {
      this.getAllNomineesRelatedToAccount();
  }
      
  getAllNomineesRelatedToAccount(){
    let accNum = localStorage.getItem('accountId');
    if(accNum != null){
      this.__customerService.getAllNominees(parseInt(accNum)).subscribe(
        (data)=>{
          this.allNominees = data;
        },
        (err)=>{
          console.log(err.err);
          console.log(err.message);
        });
    }
  }
}
