import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/DTO/login-dto';
import { Mail } from 'src/app/DTO/mail';
import { LoginService } from 'src/app/Service/login.service';
import { LoginClass } from 'src/app/login-class';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  public email: string = '';
  loginDto: LoginDTO = new LoginDTO('', '',"");
  mailDto: Mail = new Mail('', '', '');
  constructor(private router: Router, private __loginService: LoginService) {}

  resetPass(email: string) {
    alert('Entered inside the restpass');
    this.loginDto.userName = email;
    this.__loginService.doVerifyUser(this.loginDto).subscribe(
      (data) => {
        console.log('Do verified user successfullty ');
        if (data != null) {
          console.log('inside data outside if');

          if (data) {
            console.log('inside  for do user if');
            this.mailDto.recipient = email;
            this.__loginService.doSendEmail(this.mailDto).subscribe(
              (data) => {
                console.log('sended successfully');

                if (data != null) {
                  console.log('mail reset is not null');
                  if (data) {
                    this.__loginService.setLoingInfo(email);
                    console.log(' successfully'+this.__loginService.getLoginInfo());
                    this.router.navigate(["reset"]);
                    console.log(
                      '-----------------------------------------------------'
                    );
                  } else {
                    this.router.navigate(['login']);
                  }
                }
              },
              (err) => {
                console.log('error occurred------------ successfully');
                console.log('Error ' + err);
              }
            );
          } else {
            this.router.navigate(['login']);
          }
        }
      },
      (err) => {
        console.log('error occurred------------ 222222successfully');
        console.log('Error ' + err.error);
      }
    );
  }
}
