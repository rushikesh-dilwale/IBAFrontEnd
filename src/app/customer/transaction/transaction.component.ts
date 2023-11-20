import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  @Input() transactionData: any;

}
