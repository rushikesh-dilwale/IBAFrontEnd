import { Component } from '@angular/core';
import { TransactionDto } from 'src/app/DTO/transaction-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-transaction-between',
  templateUrl: './transaction-between.component.html',
  styleUrls: ['./transaction-between.component.css']
})
export class TransactionBetweenComponent {
  __customerService:CustomerService;

  allTransaction:TransactionDto[]=[];
  isVisible:boolean=true;
  text:string='Show Transaction';

  constructor(___customerService:CustomerService){
    this.__customerService=___customerService;
  }

  getAllTransactionFromDate(from:string,to:string){

    if (this.isVisible != true) {
      this.isVisible = true;
      this.text = "Hide Transaction";
    } else if (this.isVisible == true){
      this.isVisible = false;
      this.text = "Show Transaction";
    }
    let accountId=localStorage.getItem('accountId');
    if(accountId!=null){

      this.__customerService.listAllTrasnaction(parseInt(accountId),from,to).subscribe(
        (data)=>{
          this.allTransaction=data;
        },
        (err)=>{
          console.log(err.err);
          console.log(err.message);    
        }
      
        );


    }
    
  }


}
