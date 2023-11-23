export class DebitCardDto {
   
    debitCardPin:number;
    issueDate:Date;
    debitCardLimit: number;
    debitCardNumber:number;
    expiryDate:Date;
    
    constructor(
        debitCardPin:number,
        issueDate:Date,
        debitCardLimit: number,
        debitCardNumber:number,
        expiryDate:Date,
    ){
       this.debitCardPin=debitCardPin;
       this. issueDate=issueDate;
       this. debitCardLimit=debitCardLimit;
        this.debitCardNumber=debitCardNumber;
        this.expiryDate=expiryDate;
    }



}
