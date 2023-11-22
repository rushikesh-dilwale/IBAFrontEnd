import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NomineeDTO } from '../DTO/nominee-dto';
import { Router } from '@angular/router';
import { TransactionDto } from '../DTO/transaction-dto';
import { DepositDTO } from '../DTO/deposit-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private api:HttpClient) { }

  contextpath='http://localhost:5005/';
  addNomineeEndPoint= this.contextpath +'customer/addNominee';
  allocateNomineeEndPoint=this.contextpath+'customer/allocateNomineeToAccount'
  getAllNomineesOfAccount=this.contextpath+'normalUser/listAllNominee'
  getNomineeThroughID=this.contextpath+'normalUser/findNomineeById'
  deleteNomineeById=this.contextpath+'customer/deleteNomineeById'
  depositAmount=this.contextpath+'customer/deposit'
  withdrawAmount=this.contextpath+'customer/withdraw'

  addNewNominee(dto:NomineeDTO):Observable<NomineeDTO>{
    let result=this.api.post<NomineeDTO>(
      `${this.addNomineeEndPoint}`, dto
    );
    return result;
    
    }

  linkNomineeToAcccount(nomineeId:number,accountId:Number):Observable<NomineeDTO>{
    var endpoint=this.allocateNomineeEndPoint+"?nomineeId="+nomineeId+"&accNum="+accountId;

    let result=this.api.put<NomineeDTO>(`${endpoint}`,[]);
    return result;
  }

  getAllNominees(accId:Number):Observable<NomineeDTO[]>{
    var endpoint=this.getAllNomineesOfAccount+"?accountId="+accId;
    let result=this.api.get<any>(`${endpoint}`);
    return result;
  }

  getNomineeById(nomineeId:number):Observable<NomineeDTO>{
    var endpoint=this.getNomineeThroughID+"?nomineeId="+nomineeId;
    let result=this.api.get<NomineeDTO>(`${endpoint}`);
    return result;
  }

  deleteNominee(nomineeId:number):Observable<string>{
    var endpoint=this.deleteNomineeById+"/"+nomineeId;
    let result=this.api.delete<string>(`${endpoint}`);
    return result
  }

  deposit(accountId:number,amount:number,dto:DepositDTO):Observable<TransactionDto>{
    // http://localhost:5005/customer/deposit?accountId=45&amount=1000
    var endpoint = this.depositAmount + "?accountId=" + accountId + "&amount=" +amount;
    let result=this.api.put<TransactionDto>(`${endpoint}`,dto);
    return result;
  }

}
