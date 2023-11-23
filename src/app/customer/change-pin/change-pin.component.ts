import { Component } from '@angular/core';
import { DebitCardDto } from 'src/app/DTO/debit-card-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
  styleUrls: ['./change-pin.component.css']
})
export class ChangePinComponent {
  dto:DebitCardDto = new DebitCardDto(
    0,
    new Date(),
    0,
    0,
    new Date()
   );

   newPin:number | null=null;

   __customerService:CustomerService;
   constructor(__customerService:CustomerService){
    this.__customerService=__customerService;
   }

  onSubmit(){
    if(this.newPin !== null){
      this.__customerService.changeDebitCardPin(this.dto.debitCardNumber, this.newPin).subscribe(
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