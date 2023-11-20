import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css'],
})
export class BeneficiaryComponent {
  @Input() beneficiaryData: any;
// You can replace 'any' with the actual type of data for beneficiaries
}
