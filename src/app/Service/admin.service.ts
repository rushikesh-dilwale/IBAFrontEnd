import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponseDTO } from '../DTO/account-response-dto';
import { AccountStatusUpdate } from '../DTO/account-status-update';
import { DebitCardDto } from '../DTO/debit-card-dto';
import { Requestdto } from '../DTO/requestdto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private api: HttpClient) { }

  contextPath = 'http://localhost:5005/';
  addSavingAccountEndPoint = this.contextPath + 'admin/saveSavingsAccountDto';
  addCurrentAccountEndPoint = this.contextPath + 'admin/saveCurrentAcoountDto';
  getAccountEndPoint = this.contextPath + 'normalUser/account/userId?userId=';
  linkAccount = this.contextPath + "admin/usertoaccount";
  getAllAccounts = this.contextPath + "admin/getallaccounts";
  getAccountById = this.contextPath + "normalUser/getAccountById?accountId=";
  getAccountsByStatus = this.contextPath + "admin/account/pending";
  updateSavingAccount = this.contextPath + "admin/updateSavingsAccount/";
  updateCurrentAccount = this.contextPath + "admin/updateCurrentAccount/";
  updateAccountStatus = this.contextPath + "admin/account/status/";
  createNewDebitCard=this.contextPath + "admin/createDebitCard";
  doAccountLinkWithdebit1=this.contextPath + "admin/allocateDebitCardToAccount";
  getAllRequest=this.contextPath + "admin/all/requests"

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

  dogetRegisteredAccount(userId: number): Observable<AccountResponseDTO>{
    var endpoint = this.getAccountEndPoint + userId;
    console.log('Inside Service Get account By UserId Service '+this.getAccountEndPoint);
    let outcome = this.api.get<AccountResponseDTO>(`${endpoint}`);
    return outcome;
  }

  doAccountLinkWithid(accountid:number,userId:number): Observable<AccountResponseDTO>
  {
    var endpoint = this.linkAccount + "?accNum="+accountid+"&userId="+userId;
    console.log('Inside Service of do account link with user.');
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,[]);
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
    var endpoint = this.updateSavingAccount + accountId;
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,dto);
    return outcome;
  }

  doApproveCurrentAccount(accountId: number, dto: AccountResponseDTO): Observable<AccountResponseDTO>{
    console.log("Inside Service of Approve Current Account.");
    var endpoint = this.updateCurrentAccount + accountId;
    let outcome = this.api.put<AccountResponseDTO>(`${endpoint}`,dto);
    return outcome;
  }

  doApproveAccount(accountId: number, dto: AccountStatusUpdate): Observable<AccountResponseDTO>{
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

  doAccountLinkWithdebit(accNum:number,debitCardNumber:number):Observable<DebitCardDto>{
    var endpoint = this.doAccountLinkWithdebit1 + "?accNum="+accNum+"&debitCardNum="+debitCardNumber;
    console.log('Inside Service ');
    let outcome =this.api.put<DebitCardDto>(`${endpoint}`,[]);
    return outcome;
  }
}
