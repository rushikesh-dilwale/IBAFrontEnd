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

  username: string = ' ';
  email: string = ' ';
  password: string = ' ';
  role: string = ' ';

  registerDto:Registration = new Registration();
  constructor(private router:Router ,private __loginService:LoginService){
    
  }  
   
   onSubmit() {
    
    this.registerDto.username = this.username;
   this.registerDto.email = this.email;
   this.registerDto.password = this.password;
   this.registerDto.role = this.role;
  

   this.__loginService.doRegisterApplicant(this.registerDto).subscribe(
    (data) => {
   
      if (data != null) {
       
          alert("applicant Registration started ")
          this.router.navigate(["login"]);
      
      }
    },
    (err) => {
      console.log('Error ' + err);
    }
  );

   
  this.username = '';
  this.email = '';
  this.password = '';
  this.role = '';
 
  }
 
}
