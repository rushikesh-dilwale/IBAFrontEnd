export class Requestdto {

       requestId:number;
       accountId:number;
       accountHolderName:string;
       phoneNo:number;
       requestType:string;
       status:string
   
       constructor(
        requestId:number,
        accountId:number,
        accountHolderName:string,
        phoneNo:number,
        requestType:string,
        status:string
       ){
          this.requestId=requestId;
          this.accountId=accountId;
          this.accountHolderName=accountHolderName;
          this.phoneNo=phoneNo;
          this.requestType=requestType;
          this.status=status;
       }
}
