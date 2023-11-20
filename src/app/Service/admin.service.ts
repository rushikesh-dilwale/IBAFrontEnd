import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountBasicDTO } from '../DTO/account-basic-dto';
import { AccountResponseDTO } from '../account-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private api: HttpClient) { }

  contextPath = 'http://localhost:5005/';
  addAccountEndPoint = this.contextPath + 'admin/saveSavingsAccountDto';
  getAccountEndPoint = this.contextPath + 'normalUser/account/userId?userId=';
  linkAccount = "admin/usertoaccount";

  doAccountRegistration(dto:AccountBasicDTO): Observable<AccountBasicDTO>{
    console.log('Inside Service '+dto.accountHolderName);
    let outcome = this.api.post<any>(
      `${this.addAccountEndPoint}`,
      dto
    );
    return outcome;
  }

  dogetRegisteredAccount(userId: number): Observable<AccountResponseDTO>{
    this.getAccountEndPoint = this.getAccountEndPoint + userId;
    console.log('Inside Service Get account By UserId Service '+this.getAccountEndPoint);
    let outcome = this.api.get<AccountResponseDTO>(`${this.getAccountEndPoint}`);
    console.log("before return from Service "+outcome);
    return outcome;
  }

  doAccountLinkWithid(userId:number,accountid:number): Observable<AccountBasicDTO>
  {
    this.linkAccount+='?accNum='+accountid+"&userId"+userId;
    console.log('Inside Service ');
    let outcome = this.api.put<AccountBasicDTO>(`${this.linkAccount}`,[]);
    return outcome;
  }
}
