import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin:boolean|null;

  constructor(private router:Router){
      this.isLogin=localStorage.getItem("loginStatus")=="true"?true:false;
  }

  homePage(){
    this.router.navigate([""]);
  }

  about(){
    this.router.navigate(["applicantRegistration"]);
  }

  contact(){
    this.router.navigate(["contact"]);
  }

  login(){
    this.router.navigate(["login"]);
  }

  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }
}
