import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private contextPath = 'http://localhost:5005';

  constructor(private http: HttpClient) {}

  addNewUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.contextPath}/addnewuser`, user);
  }
}
