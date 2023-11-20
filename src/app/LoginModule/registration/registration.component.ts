import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/DTO/registration';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // userId: number = 0;
  // username: string = ' ';
  // email: string = ' ';
  // password: string = ' ';
  // role: string = ' ';

  // registerDto:Registration = new Registration(this.userId,this.username,this.email,this.password,this.role);
  registerDto:Registration = new Registration(
    0,
    '',
    '',
    '',
    ''
  );
  constructor(
    private router:Router,
    private __loginService:LoginService){
  }  
   
   onSubmit() {
    
    // this.registerDto.userId = this.userId
    // this.registerDto.userName = this.username;
    // this.registerDto.emailID = this.email;
    // this.registerDto.password = this.password;
    // this.registerDto.role = this.role;
  

   this.__loginService.doRegisterApplicant(this.registerDto).subscribe(
    (data) => {
   
      if (data != null) {

          console.log(data);
          //alert("applicant Registration started ")
          this.router.navigate(["login"]);
      
      }
    },
    (err) => {
      console.log('Error ' + err);
    }
  );

  // this.username = '';
  // this.email = '';
  // this.password = '';
  // this.role = '';
 
  }
 
}
