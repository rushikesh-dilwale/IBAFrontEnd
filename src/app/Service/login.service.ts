import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../DTO/login-dto';
import { ResetPass } from '../DTO/reset-pass';
import { Mail } from '../DTO/mail';
import { LoginClass } from '../login-class';
import { Registration } from '../DTO/registration';
import { LoginResponse } from '../DTO/login-response';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: HttpClient) {}
  contextPath = 'http://localhost:5005/user/login';
  verifyOtpPath ='http://localhost:5005/user/verifyOtp';
  verifyUser ='http://localhost:5005/user/getByEmail';
  sendMail='http://localhost:5005/user/send';
  updatepass = 'http://localhost:5005/user/resetpassword';
  registerApplicant= 'http://localhost:5005/user/addnewuser';

  login:LoginClass= new LoginClass();
  
  doLoginCheck(dto: LoginDTO): Observable<LoginResponse> {
    return this.api.post<LoginResponse>(`${this.contextPath}`, dto);
  }

  doAdminLogin(dto: LoginDTO): Observable<LoginResponse> {
    return this.api.post<LoginResponse>(`${this.contextPath}`, dto);
  }

  doVerifyDetails(resetDto:ResetPass): Observable<boolean>{
    return this.api.put<any>(`${this.updatepass}`, resetDto);
  }

  doVerifyUser(loginDto:LoginDTO):Observable<boolean>{
        console.log("Inside DO verify ")
        console.log(loginDto);
        
    return this.api.post<any>(`${this.verifyUser}`, loginDto);
  }

  doSendEmail(mailDto:Mail):Observable<boolean>{
       console.log("inside do send email"); 
       console.log(mailDto);
       
    return this.api.post<any>(`${this.sendMail}`, mailDto);
  }

  doRegisterApplicant(registerDto:Registration){
    return this.api.post<any>(`${this.registerApplicant}`, registerDto);
  }

  setLoingInfo(email:string){
    alert("Email Set successfully")
    this.login.email=email;
  }

  getLoginInfo(){
    return this.login.email;
  }
}
