// create-debit-card.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DebitCardDto } from 'src/app/DTO/debit-card-dto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-create-debit-card',
  templateUrl: './create-debit-card.component.html',
  styleUrls: ['./create-debit-card.component.css']
})

export class CreateDebitCardComponent {
   dto:DebitCardDto = new DebitCardDto(
    0,
    new Date(),
    0,
    0,
    new Date()
   );

   __adminService: AdminService;
   router: Router;
   constructor(__adminService: AdminService,router: Router){
     this.__adminService = __adminService;
     this.router = router;
   }
   onSubmit() {
    this.__adminService.createDebitCard(this.dto).subscribe(
      (data) => {
        localStorage.setItem('DebitId',data+'');
        const accountId = localStorage.getItem('accountId');
        const debitId = localStorage.getItem('DebitId');
        if (accountId != null && debitId != null) {
          this.__adminService.doAccountLinkWithdebit(parseInt(accountId),parseInt(debitId))
            .subscribe((linkData) => {
              console.log('Account linked to Debit Card:', linkData.debitCardNumber);
              this.router.navigateByUrl("/adminhome");
            }, (linkError) => {
              console.error('Error linking Account to Debit Card:', linkError);
            });
        } else {
          console.error('Account ID not found in localStorage.');
        }
      },
      (err) => {
        console.log('DebitCard Creation Error ' + err);
      }
    );
  }
}










  //  onSubmit(){
  //       this.__adminService.createDebitCard(this.dto).subscribe(
  //         (data)=>{
  //           localStorage.setItem('debitCardNumber',data.debitCardNumber+'');
  //         },
  //         (err) => {
  //           console.log('DebitCard Creation Error '+err);
  //         }
  //       )
          

       
  //     }


  // }
