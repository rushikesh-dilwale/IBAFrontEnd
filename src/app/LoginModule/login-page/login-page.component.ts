import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginDTO } from 'src/app/DTO/login-dto';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  template: `
    <h2>Login Component</h2>
    <button (click)="simulateLogin()">Simulate Login</button>
  `,
})
export class LoginPageComponent {
  isLogin:boolean=false;

  login:LoginDTO= new LoginDTO(
    '',
    '',
    ''
    );

  constructor(
    private router: Router, 
    private __loginService: LoginService) {}

  onSubmit() {

    if (this.login.role === 'CUSTOMER') {
      this.__loginService.doLoginCheck(this.login).subscribe(
        (data) => {
          this.isLogin = true;
          if (data != null) {
            localStorage.setItem(data.username, data.token);
            localStorage.setItem('userID', data.userId+'');
            localStorage.setItem('loginStatus', 'true');

            // Update the navigation to CustomerComponent after successful login
            this.router.navigate(['/customer']);
          } else {
            this.router.navigate(['/login']);
          }
          console.log(data);
        },
        (err) => {
          console.log('Error ' + err);
        }
      );
    } 
    // else {
    //   this.__loginService.doAdminLogin(this.login).subscribe(
    //     (data) => {
    //       this.isLogin = true;
    //       if (data != null) {
    //         localStorage.setItem(data.userName, data.role);
    //         localStorage.setItem('loginStatus', 'true');

    //         // Update the navigation to CustomerComponent after successful login
    //         this.router.navigate(['/customer']);
    //       } else {
    //         this.router.navigate(['/login']);
    //       }
    //       console.log(data);
    //     },
    //     (err) => {
    //       console.log('Error ' + err);
    //     }
    //   );
    // }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  ForgotPassword() {
    this.router.navigate(['/forgot']);
  }

}
