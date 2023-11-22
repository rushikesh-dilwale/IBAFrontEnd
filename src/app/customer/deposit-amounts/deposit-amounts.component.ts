import { Component } from '@angular/core';
import { DepositDTO } from 'src/app/DTO/deposit-dto';
import { TransactionDto } from 'src/app/DTO/transaction-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-deposit-amounts',
  templateUrl: './deposit-amounts.component.html',
  styleUrls: ['./deposit-amounts.component.css']
})
export class DepositAmountsComponent {
  depositDto:DepositDTO = new DepositDTO(
    '',
    '');

  dto: TransactionDto = new TransactionDto(
    0,
    '',
    '',
    '',
    ''
  );
  amount:number=0;

  __customerService:CustomerService;
  constructor(___customerService:CustomerService){
    this.__customerService=___customerService;
  }
  
  doDeposit(amount:string){
    console.log("inside do Deposit");
    
    let accId = localStorage.getItem('accountId');
    if(accId!=null){
      this.__customerService.deposit(parseInt(accId),parseInt(amount),this.depositDto).subscribe(
      (data)=>{
        this.dto =data;
        console.log(data);
        alert("Deposited !!"+ amount +" Status is "+ this.dto.transactionStatus);
      },(err)=>{
        console.log(err.err);
        console.log(err.message);
      }
      );
    }

  }

  withdraw(){
    alert('withdrawed')
  }
}
