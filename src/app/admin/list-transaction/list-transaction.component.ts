import { Component } from '@angular/core';
import { TransactionDto } from 'src/app/DTO/transaction-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent {
  

  allTransaction:TransactionDto[]=[];
  isVisible:boolean=true;
  text:string='Show Transaction';

  constructor(private ___adminService:AdminService){
    
  }

  getAllTransactionFromDate(accountId:string,from:string,to:string){

    if (this.isVisible != true) {
      this.isVisible = true;
      this.text = "Hide Transaction";
    } else if (this.isVisible == true){
      this.isVisible = false;
      this.text = "Show Transaction";
    }
    
    

      this.___adminService.listAllTrasnaction(parseInt(accountId),from,to).subscribe(
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
