// check-expiry.component.ts
import { Component } from '@angular/core';
import { DebitCardDto } from 'src/app/DTO/debit-card-dto';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-check-expiry',
  templateUrl: './check-expiry-component.component.html',
  styleUrls: ['./check-expiry-component.component.css']
})
export class CheckExpiryComponent {
  dto:DebitCardDto = new DebitCardDto(
    0,
    new Date(),
    0,
    0,
    new Date()
   );
  expiryStatus: string | null = null;

  constructor(private customerService: CustomerService) {}

  onSubmit() {
    if (this.dto.debitCardNumber !== null) {
      this.customerService.checkDebitCardExpiry(this.dto.debitCardNumber).subscribe(
        (data) => {
          alert("Debit Card Expiry Status"+this.expiryStatus);
          this.expiryStatus = data;

          console.log('Debit Card Expiry Status:', data);
         
        },
        (err) => {
          console.log('Error checking Debit Card Expiry:', err);
          
          
        }
      );
    } else {
      console.log('Debit Card Number is null. Please provide a valid Debit Card Number.');
    }
  }
}

