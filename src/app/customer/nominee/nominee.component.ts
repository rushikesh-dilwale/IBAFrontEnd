import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.css']
})
export class NomineeComponent {
  @Input() nomineeData: any;

}
