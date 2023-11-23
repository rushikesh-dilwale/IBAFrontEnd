import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NomineeDTO } from '../DTO/nominee-dto';
import { Router } from '@angular/router';
import { TransactionDto } from '../DTO/transaction-dto';
import { DepositDTO } from '../DTO/deposit-dto';
import { AccountResponseDTO } from '../DTO/account-response-dto';
import { BeneficiaryDto } from '../DTO/beneficiary-dto';

import { DebitCardDto } from '../DTO/debit-card-dto';
import { Requestdto } from '../DTO/requestdto';
import { AccountResponseDTO } from '../DTO/account-response-dto';
import { BeneficiaryDto } from '../DTO/beneficiary-dto';

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

  addSavingAccountEndPoint = this.contextpath + 'customer/saveSavingsAccountDto';
  addCurrentAccountEndPoint = this.contextpath + 'customer/saveCurrentAcoountDto';
  linkAccount = this.contextpath + "customer/usertoaccount";
  updateSavingAccount = this.contextpath + "customer/updateSavingsAccount/";
  updateCurrentAccount = this.contextpath + "customer/updateCurrentAccount/";
  getAccountEndPoint = this.contextpath + 'normalUser/account/userId?userId=';
  getAccountById = this.contextpath + "normalUser/getAccountById?accountId=";
  linkPolicy = this.contextpath+'customer/allocatePolicyToAccount';
  checkExpiry = this.contextpath+'customer/policy/check-expiry';

  createBeneficiary = this.contextpath + 'customer/addBeneficiary';
  linkBeneficiary = this.contextpath + 'customer/allocateBeneficiaryToAccount';
  deleteBeneficiary = this.contextpath + 'customer/deleteBeneficiary';
  findBeneficiarybyId = this.contextpath + 'normalUser/listAllBeneficiariesbyAccount';

  dogetRegisteredAccount(userId: number): Observable<AccountResponseDTO>{
    var endpoint = this.getAccountEndPoint + userId;
    console.log('Inside Service Get account By UserId Service '+this.getAccountEndPoint);
    let outcome = this.api.get<AccountResponseDTO>(`${endpoint}`);
    return outcome;
  }

  dogetAccountById(accountId: number): Observable<AccountResponseDTO>{
    console.log("Inside Service of Get Account By Account Id.");
    var endpoint = this.getAccountById + accountId;
    let outcome = this.api.get<AccountResponseDTO>(`${endpoint}`);
    return outcome;
  }

  doSavingAccountRegistration(dto:AccountResponseDTO): Observable<AccountResponseDTO>{
    console.log('Inside Service of saving account register'+dto.accountHolderName);
    let outcome = this.api.post<AccountResponseDTO>(
      `${this.addSavingAccountEndPoint}`, dto
    );
    return outcome;
  }

  doCurrentAccountRegistration(dto:AccountResponseDTO): Observable<AccountResponseDTO>{
    console.log('Inside Service of current account register'+dto.accountHolderName);
    let outcome = this.api.post<AccountResponseDTO>(
      `${this.addCurrentAccountEndPoint}`, dto
    );
    return outcome;
  }

  doAccountLinkWithid(accountid:number,userId:number): Observable<AccountResponseDTO>
  {
    var endpoint = this.linkAccount + "?accNum="+accountid+"&userId="+userId;
    console.log('Inside Service of do account link with user.');
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,[]);
    return outcome;
  }

  doUpdateSavingAccount(accountId: number, dto: AccountResponseDTO): Observable<AccountResponseDTO>{
    console.log("Inside Service of Approve Saving Account.");
    var endpoint = this.updateSavingAccount + accountId;
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,dto);
    return outcome;
  }

  doUpdateCurrentAccount(accountId: number, dto: AccountResponseDTO): Observable<AccountResponseDTO>{
    console.log("Inside Service of Approve Current Account.");
    var endpoint = this.updateCurrentAccount + accountId;
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,dto);
    return outcome;
  }

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
    let result=this.api.get<NomineeDTO[]>(`${endpoint}`);
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
  
  changeDebitCardPin(debitCardNumber: number, newPin: number): Observable<DebitCardDto> {
    var link = this.contextpath+'customer/'+debitCardNumber+'/change-pin';
    var endpoint = link+'?newPin='+newPin;
    return this.api.put<DebitCardDto>(`${endpoint}`, []);
  }
  requestNewDebitCard(debitCardNumber: number): Observable<DebitCardDto> {
    var endpoint = `${this.contextpath}customer/${debitCardNumber}/request-new-card`;
    return this.api.put<DebitCardDto>(`${endpoint}`, []);
  }
  checkDebitCardExpiry(debitCardNumber: number): Observable<string> {
    var endpoint = this.contextpath + 'customer/' + debitCardNumber + '/check-expiry';
    return this.api.get<string>(`${endpoint}`);
  }

  generaterequest(dto:Requestdto):Observable<Requestdto>{
    var endpoint=this.contextpath +'customer/request/save';
    return this.api.post<Requestdto>(`${endpoint}`,dto);
  }

  allocatePolicy(polNum:number,accNum:number): Observable<AccountResponseDTO>{
    var endpoint = this.linkPolicy+'?policyId='+polNum+'&accNum='+accNum
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`, null);
    return outcome;
  }

  checkExpiryOfPolicy(policyNumber:number): Observable<any>{
    var endpoint = this.checkExpiry+'?policyNumber='+policyNumber;
    let outcome = this.api.get<any>(`${endpoint}`);
    return outcome;
  }

  doCreateBeneficiary(dto: BeneficiaryDto): Observable<BeneficiaryDto>{
    let outcome = this.api.post<BeneficiaryDto>(`${this.createBeneficiary}`,dto);
    return outcome;
  }

  dolinkBeneficiarywithAccount(accountid:number,beneficiaryId:number): Observable<BeneficiaryDto>
  {
    var endpoint = this.linkBeneficiary + "?accNum="+accountid+"&beneficiaryId="+beneficiaryId;
    console.log('Inside Service of do Beneficiary link with account.');
    let outcome = this.api.put<BeneficiaryDto>(`${endpoint}`,[]);
    return outcome;
  }

  dodeleteBeneficiary(beneficiaryId:number): Observable<any>{
    var endpoint=this.deleteBeneficiary +"?beneficiaryId="+beneficiaryId;
    let result=this.api.delete<any>(`${endpoint}`);
    return result
  }

  doFindBeneficiaryByID(accountId:number): Observable<BeneficiaryDto[]>{
    var endpoint=this.findBeneficiarybyId +"?accountid="+accountId;
    let result=this.api.get<BeneficiaryDto[]>(`${endpoint}`);
    return result
  }

  allocatePolicy(polNum:number,accNum:number): Observable<AccountResponseDTO>{
    var endpoint = this.linkPolicy+'?policyId='+polNum+'&accNum='+accNum
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`, null);
    return outcome;
  }

  checkExpiryOfPolicy(policyNumber:number): Observable<any>{
    var endpoint = this.checkExpiry+'?policyNumber='+policyNumber;
    let outcome = this.api.get<any>(`${endpoint}`);
    return outcome;
  }

  doCreateBeneficiary(dto: BeneficiaryDto): Observable<BeneficiaryDto>{
    let outcome = this.api.post<BeneficiaryDto>(`${this.createBeneficiary}`,dto);
    return outcome;
  }

  dolinkBeneficiarywithAccount(accountid:number,beneficiaryId:number): Observable<BeneficiaryDto>
  {
    var endpoint = this.linkBeneficiary + "?accNum="+accountid+"&beneficiaryId="+beneficiaryId;
    console.log('Inside Service of do Beneficiary link with account.');
    let outcome = this.api.put<BeneficiaryDto>(`${endpoint}`,[]);
    return outcome;
  }

  dodeleteBeneficiary(beneficiaryId:number): Observable<any>{
    var endpoint=this.deleteBeneficiary +"?beneficiaryId="+beneficiaryId;
    let result=this.api.delete<any>(`${endpoint}`);
    return result
  }

  doFindBeneficiaryByID(accountId:number): Observable<BeneficiaryDto[]>{
    var endpoint=this.findBeneficiarybyId +"?accountid="+accountId;
    let result=this.api.get<BeneficiaryDto[]>(`${endpoint}`);
    return result
  }

}
