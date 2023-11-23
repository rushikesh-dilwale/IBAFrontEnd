import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NomineeDTO } from 'src/app/DTO/nominee-dto';
import { CustomerService } from 'src/app/Service/customer.service';
import { FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-nominee',
  templateUrl: './add-nominee.component.html',
  styleUrls: ['./add-nominee.component.css']
})
export class AddNomineeComponent implements OnInit{



  dto:NomineeDTO=new NomineeDTO(
    0,"","","","",""
  )



    __customerService:CustomerService;
    router:Router;

    nomineeForm:FormGroup=new FormGroup({});

    

    constructor(___customerService:CustomerService,
      router:Router,
      private formBuilder:FormBuilder){
        this.__customerService=___customerService;
        this.router=router;
      
      }
      ngOnInit(): void {
        this.nomineeForm=this.formBuilder.group({
          name:['',[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]],
          govtId:['',[Validators.required,Validators.min(6),Validators.max(13)]],
          phoneNumber:['',[Validators.required,Validators.min(9),Validators.max(11),Validators.pattern(/^[0-9]+$/)]]
        })
      }
  

  addNominee(){
    console.log("inside nominee ts");
    this.__customerService.addNewNominee(this.dto).subscribe(
      (data)=>{
        this.dto = data;
        localStorage.setItem("nomineeId1",data.nomineeId+"")
        let nomineeId=localStorage.getItem('nomineeId1');
        let accNum=localStorage.getItem('accountId');
        if(nomineeId!=null && accNum!=null){

         
          this.__customerService.linkNomineeToAcccount(parseInt(nomineeId),parseInt(accNum)).subscribe((data)=>{
          alert(nomineeId+"Nominee is allocated to the account"+accNum);  
          },(err)=>{
            console.log(err.err);
            console.log(err.message); 
          }
          )

        }
      }, (err) => {
        console.log(err.err);
        console.log(err.message);
      }
    );
    
    
    
  }
}
