import { Component } from '@angular/core';
import { NomineeDTO } from 'src/app/DTO/nominee-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-show-nominee',
  templateUrl: './show-nominee.component.html',
  styleUrls: ['./show-nominee.component.css']
})
export class ShowNomineeComponent {

  allNominees:NomineeDTO[]=[];

  accountId:number=0;
  constructor(private ___adminService:AdminService){

  }
  getAllNomineesRelatedToAccount(){
   
      this.___adminService.getAllNominees(this.accountId).subscribe(
        (data)=>{
          this.allNominees = data;
        },
        (err)=>{
          console.log(err.err);
          console.log(err.message);
        });
    }
  
}
