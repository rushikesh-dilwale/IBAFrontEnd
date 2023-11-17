import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../DTO/login-dto';
import { ResetPass } from '../DTO/reset-pass';
import { Mail } from '../DTO/mail';
import { LoginClass } from '../login-class';
import { Registration } from '../DTO/registration';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: HttpClient) {}
  contextPath = 'http://localhost:2001/public/userlogin';
   verifyOtpPath ='http://localhost:2001/user/verifyOtp';
   verifyUser ='http://localhost:2001/user/getByEmail';
   sendMail='http://localhost:2001/user/emailotp';
   updatepass = 'http://localhost:2001/user/resetpassword';
   registerApplicant= 'http://localhost:2001/user/newApplicant';
   adminlogin = 'http://localhost:2001/public/admin';
    login:LoginClass= new LoginClass();

    

  doLoginCheck(dto: LoginDTO): Observable<LoginDTO> {
  
    return this.api.post<any>(`${this.contextPath}`, dto);
  }
  doAdminLogin(dto: LoginDTO): Observable<LoginDTO> {
  
    return this.api.post<any>(`${this.adminlogin}`, dto);
  }

  doVerifyDetails(resetDto:ResetPass): Observable<boolean>{

    return   this.api.put<any>(`${this.updatepass}`, resetDto);
  }
  doVerifyUser(loginDto:LoginDTO):Observable<boolean>{
        console.log("Inside DO verify ")
    return this.api.post<any>(`${this.verifyUser}`, loginDto);
  }


  doSendEmail(mailDto:Mail):Observable<boolean>{
       console.log("inside do send email");
       
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
