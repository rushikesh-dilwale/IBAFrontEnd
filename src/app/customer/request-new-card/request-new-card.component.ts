// request-new-card.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Requestdto } from 'src/app/DTO/requestdto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-request-new-card',
  templateUrl: './request-new-card.component.html',
  styleUrls: ['./request-new-card.component.css']
})
export class RequestNewCardComponent {
  // debitCardNumber: number | null = null;

  dto:Requestdto = new Requestdto(
    0,0,'',0,'',''
  )
  router: Router;
  constructor(
    private customerService: CustomerService,
    router: Router
    ) {
      this.router = router;
    }

  onSubmit() {
    this.dto.requestType = "PENDING";
    this.customerService.generaterequest(this.dto).subscribe(
      (data) => {
        localStorage.setItem('Account Id', data.accountId+'')
        console.log('New Debit Card requested successfully:', data);
        this.router.navigateByUrl("/customer/home");
      },
      (err) => {
        console.log('Error requesting new Debit Card:', err);
      }
    );
  }
}
