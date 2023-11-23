import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { DebitCardDto } from 'src/app/DTO/debit-card-dto';
import { Requestdto } from 'src/app/DTO/requestdto';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-approve-card',
  templateUrl: './approve-card.component.html',
  styleUrls: ['./approve-card.component.css']
})
export class ApproveCardComponent implements OnInit{
  allRequests: Requestdto[] = [];

  __adminService: AdminService;
  router: Router;
  constructor(
    __adminService: AdminService,
    router: Router
    ){
    this.__adminService = __adminService;
    this.router = router;
  }
  
  ngOnInit(): void {
    this.doLoad()
  }

  doLoad(){
    this.__adminService.dogetAllRequests().subscribe(
      (data) => {
        this.allRequests = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createJson(request: Requestdto){
    localStorage.setItem('accountId',request.accountId+'');
    this.__adminService.deleteServiceRequest(request.requestId);
    this.router.navigateByUrl("/create-debit-card");
  }
}
