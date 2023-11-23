import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NomineeDTO } from 'src/app/DTO/nominee-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-view-nominee-id',
  templateUrl: './view-nominee-id.component.html',
  styleUrls: ['./view-nominee-id.component.css']
})
export class ViewNomineeIdComponent {
  __customerService:CustomerService;
  router:Router;
  deletemsg: String = '';

  nominee:NomineeDTO=new NomineeDTO(0,"","","","","");
  nomineeId:number=0;
  nId:number=0;
  constructor(___customerService:CustomerService,
    router:Router){
      this.__customerService=___customerService;
      this.router=router;
    }

    doLoad(nomineeId:number){
      this.__customerService.getNomineeById(nomineeId).subscribe((data)=>{
        this.nominee=data;
        
      },
      (err)=>{
        console.log(err.err);
        console.log(err.message);
      }
      );
    }

    deleteByID(nId:number){
      console.log("inside delete");
      this.__customerService.deleteNominee(nId).subscribe(
      (data)=> {
        this.deletemsg = data.str;
       alert(this.deletemsg);
       this.nominee=new NomineeDTO(0,"","","","","");
      },(err)=>{
        console.log(err.err);
        console.log(err.message);
      }
      );
    }

}
