export class TransactionDto {
    transactionId:number;
    transactionType:string;
    date:string;
    transactionStatus:string;
    transactionRemarks:string;

    constructor(transactionId:number,
        transactionType:string,
        date:string,
        transactionStatus:string,
        transactionRemarks:string){
            this.transactionId=transactionId;
            this.transactionType=transactionType;
            this.date=date;
            this.transactionStatus=transactionStatus;
            this.transactionRemarks=transactionRemarks;
        }
}
