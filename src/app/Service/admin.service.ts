import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountBasicDTO } from '../DTO/account-basic-dto';
import { AccountResponseDTO } from '../DTO/account-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private api: HttpClient) { }

  contextPath = 'http://localhost:5005/';
  addAccountEndPoint = this.contextPath + 'admin/saveSavingsAccountDto';
  getAccountEndPoint = this.contextPath + 'normalUser/account/userId?userId=';
  linkAccount = this.contextPath + "admin/usertoaccount";
  getAllAccounts = this.contextPath + "admin/getallaccounts";
  getAccountById = this.contextPath + "normalUser/getAccountById?accountId=";

  doAccountRegistration(dto:AccountBasicDTO): Observable<AccountBasicDTO>{
    console.log('Inside Service '+dto.accountHolderName);
    let outcome = this.api.post<any>(
      `${this.addAccountEndPoint}`, dto
    );
    return outcome;
  }

  dogetRegisteredAccount(userId: number): Observable<AccountResponseDTO>{
    this.getAccountEndPoint = this.getAccountEndPoint + userId;
    console.log('Inside Service Get account By UserId Service '+this.getAccountEndPoint);
    let outcome = this.api.get<AccountResponseDTO>(`${this.getAccountEndPoint}`);
    return outcome;
  }

  doAccountLinkWithid(accountid:number,userId:number): Observable<AccountBasicDTO>
  {
    this.linkAccount+="?accNum="+accountid+"&userId="+userId;
    console.log('Inside Service of do account link with user.');
    let outcome = this.api.put<AccountBasicDTO>(`${this.linkAccount}`,[]);
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
}
