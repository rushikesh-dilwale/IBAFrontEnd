import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponseDTO } from '../DTO/account-response-dto';
import { AccountStatusUpdate } from '../DTO/account-status-update';
import { DebitCardDto } from '../DTO/debit-card-dto';
import { Requestdto } from '../DTO/requestdto';
import { PolicyDto } from '../DTO/policy-dto';
import { NomineeDTO } from '../DTO/nominee-dto';
import { TransactionDto } from '../DTO/transaction-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private api: HttpClient) { }

  contextPath = 'http://localhost:5005/';
  getAccountEndPoint = this.contextPath + 'normalUser/account/userId?userId=';
  getAllAccounts = this.contextPath + "admin/getallaccounts";
  getAccountById = this.contextPath + "normalUser/getAccountById?accountId=";
  getAccountsByStatus = this.contextPath + "admin/account/pending";
  updateSavingAccount = this.contextPath + "admin/updateSavingsAccount/";
  updateCurrentAccount = this.contextPath + "admin/updateCurrentAccount/";
  updateAccountStatus = this.contextPath + "admin/account/status/";
  createNewDebitCard=this.contextPath + "admin/createDebitCard";
  doAccountLinkWithdebit1=this.contextPath + "admin/allocateDebitCardToAccount";
  getAllRequest=this.contextPath + "admin/all/requests";
  registerNewPolicy = this.contextPath + 'admin/policy/save';
  getPolicyByAccId = this.contextPath + 'normalUser/getPolicyByAccountId';
  getAllPolicies = this.contextPath + 'admin/policy/allpolicies';
  deletepolicy = this.contextPath + 'admin/policy/delete/';
  updatepolicy = this.contextPath + 'admin/policy/update';
  deleteReequest = this.contextPath + 'admin/remove/request';
  getAllNomineesOfAccount=this.contextPath+'normalUser/listAllNominee';
  trasnactionBetweenTwoDate=this.contextPath+'normalUser/listAllTransactions';

  dogetRegisteredAccount(userId: number): Observable<AccountResponseDTO>{
    var endpoint = this.getAccountEndPoint + userId;
    console.log('Inside Service Get account By UserId Service '+this.getAccountEndPoint);
    let outcome = this.api.get<AccountResponseDTO>(`${endpoint}`);
    return outcome;
  }

  doApproveAccount(accountId: number, dto: AccountStatusUpdate): Observable<AccountResponseDTO>{
    console.log("Inside Service of Approve Saving Account.");
    var endpoint = this.updateAccountStatus + accountId;
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,dto);
    return outcome;
  }

  dogetAllAccounts(): Observable<AccountResponseDTO[]>{
    console.log("Inside Service of Get all Accounts.");
    let outcome = this.api.get<AccountResponseDTO[]>(`${this.getAllAccounts}`);
    return outcome;
  }

  dogetAccountById(accountId: number): Observable<AccountResponseDTO>{
    console.log("Inside Service of Get Account By Account Id.");
    var endpoint = this.getAccountById + accountId;
    let outcome = this.api.get<AccountResponseDTO>(`${endpoint}`);
    return outcome;
  }

  dogetAllAccountsByStatus(): Observable<AccountResponseDTO[]>{
    console.log("Inside Service of get Account By Account Status.");
    let outcome = this.api.get<AccountResponseDTO[]>(`${this.getAccountsByStatus}`);
    return outcome;
  }

  dogetAllRequests():Observable<Requestdto[]>{
    console.log("Inside Service");
    let outcome=this.api.get<Requestdto[]>(`${this.getAllRequest}`)
    return outcome;
  }

  doApproveSavingAccount(accountId: number, dto: AccountResponseDTO): Observable<AccountResponseDTO>{
    console.log("Inside Service of Approve Saving Account.");
    var endpoint = this.updateAccountStatus + accountId;
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,dto);
    return outcome;
  }

  createDebitCard(dto:DebitCardDto): Observable<number>{
    console.log('Inside Service '+dto.issueDate);
    let outcome = this.api.post<number>(
      `${this.createNewDebitCard}`, dto
    );
    return outcome;
  }

  doAccountLinkWithdebit(accNum:number,debitCardNumber:number): Observable<DebitCardDto>{
    var endpoint = this.doAccountLinkWithdebit1 + "?accNum="+accNum+"&debitCardNum="+debitCardNumber;
    console.log('Inside Service ');
    let outcome =this.api.put<DebitCardDto>(`${endpoint}`,[]);
    return outcome;
  }

  deleteServiceRequest(reqId: number){
    let endpoint = this.deleteServiceRequest + "?reqId=" + reqId;
    this.api.delete(`${endpoint}`);
    console.log("Request Deleted");
  }

  registerPolicy(dto:PolicyDto): Observable<PolicyDto>{
    console.log('inside service'+dto.policyName);
    let outcome = this.api.post<PolicyDto>(`${this.registerNewPolicy}`,dto);
    return outcome;
  }

  getPolicyByAccNum(accNum:number): Observable<PolicyDto[]>{
    var endpoint = this.getPolicyByAccId+"?accNum="+accNum
    let outcome = this.api.get<PolicyDto[]>(`${endpoint}`);
    return outcome;
  }

  getAllPolicy(): Observable<PolicyDto[]>{
    let outcome = this.api.get<PolicyDto[]>(`${this.getAllPolicies}`);
    return outcome;
  }

  deletePolicy(policyNumber:number): Observable<any>{
    let outcome = this.api.delete<any>(`${this.deletepolicy+policyNumber}`);
    return outcome;
  }

  updatePolicy(policyNumber:number, newPremiumAmount:number): Observable<PolicyDto>{
    var endpoint = this.updatepolicy+"?policyNumber="+policyNumber+"&newPremiumAmount="+newPremiumAmount;
    let outcome = this.api.put<PolicyDto>(`${endpoint}`, null);
    return outcome;
  }

  getAllNominees(accId:Number):Observable<NomineeDTO[]>{
    var endpoint=this.getAllNomineesOfAccount+"?accountId="+accId;
    let result=this.api.get<NomineeDTO[]>(`${endpoint}`);
    return result;
  }

  listAllTrasnaction(accountId:number,from:string,to:string):Observable<TransactionDto[]>{
    var endpoint=this.trasnactionBetweenTwoDate+"?accountId="+accountId+"&from="+from+"&to="+to;
    let result=this.api.get<TransactionDto[]>(`${endpoint}`);
    return result;
  }
}
