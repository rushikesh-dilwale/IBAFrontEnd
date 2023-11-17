import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPass } from 'src/app/DTO/reset-pass';
import { LoginService } from 'src/app/Service/login.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  otp: number = 0;

  resetDto: ResetPass = new ResetPass('', 0, '');

  constructor(
    private router: Router,
    private __loginService: LoginService
    
  ) {}

  verify() {
  
    if (this.password == this.confirmPassword) {
      this.resetDto.password = this.password;
      this.resetDto.otp = this.otp;
        this.resetDto.email+=this.__loginService.getLoginInfo();
        console.log(this.resetDto.email+"................................>>>>>>>>");
        
      this.__loginService.doVerifyDetails(this.resetDto).subscribe(
        (data) => {
          if (data != null) {
            if (data) {
              alert('inside data');
              this.router.navigate(['login']);
            } else {
              this.router.navigate(['login']);
            }
            console.log(data);
          }
        },
        (err) => {
          console.log('Error ' + err);
        }
      );
    } else {
      alert('Please enter the Same Password');
    }
    this.password = '';
    this.confirmPassword = '';
    this.otp;
  }
}
