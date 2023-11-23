import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {


  senderAccounId:number=0;
  amount:number=0;
  receiverAccountId:number=0;
  password:string='';
  paymentDetails:string='';

  

  constructor(private ___customerService:CustomerService){
  }

  transfer(){
    let senderAccounId=localStorage.getItem('accountId');
    
    let userId=localStorage.getItem('userID');
    

    
    if(senderAccounId!=null && userId!=null){
      this.___customerService.transferMoneyToAccount(parseInt(senderAccounId),this.receiverAccountId,this.amount,parseInt(userId),this.password).subscribe(
        (data)=>{
          this.paymentDetails=data.str;
          alert(this.paymentDetails);
        },(err)=>{
          console.log(err.err);
          console.log(err.message);
          
          
        }    
        )
    }


   
  }
  
  
}
