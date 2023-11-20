import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent {
  @Input() policyData: any; // Replace 'any' with the actual type of data for policies
}
