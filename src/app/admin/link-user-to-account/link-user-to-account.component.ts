import { Component } from '@angular/core';

@Component({
  selector: 'app-link-user-to-account',
  templateUrl: './link-user-to-account.component.html',
  styleUrls: ['./link-user-to-account.component.css']
})
export class LinkUserToAccountComponent {

  // dto: AccountResponseDTO = new AccountResponseDTO(
  //   0,
  //   '',
  //   '',
  //   '',
  //   0,
  //   '',
  //   0,
  //   0,
  //   ''
  // );

  // __adminService: AdminService;
  // router: Router;

  // constructor(
  //   ___adminService: AdminService,
  //   router: Router
  // ){
  //   this.__adminService = ___adminService;
  //   this.router = router;
  // }

  // doShowMyAccount(){
  //   let id = localStorage.getItem("userID");
  //   console.log(id);
  //   if (id !== null) {
  //     let userId = parseInt(id);
  //     this.__adminService.dogetRegisteredAccount(userId).subscribe(
  //       (data) => {
  //         console.log("inside data "+data);
  //         this.dto = data;
  //         localStorage.setItem("accountId",data.accountId+'');
  //       }, 
  //       (err) => {
  //         console.log(err.error);
  //         console.log(err.statusText);
  //         console.log(err.message);
  //       }
  //     )
  //   } else {
  //     console.error("The 'id' from localStorage is null or undefined.");
  //   }
  //   }

}
