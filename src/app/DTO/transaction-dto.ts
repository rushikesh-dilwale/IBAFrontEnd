export class TransactionDto {
    transactionId:number;
    amount:number;
    transactionType:string;
    date:string;
    transactionStatus:string;
    transactionRemarks:string;

    constructor(transactionId:number,
        amount:number,
        transactionType:string,
        date:string,
        transactionStatus:string,
        transactionRemarks:string){
            this.transactionId=transactionId;
            this.amount=amount;
            this.transactionType=transactionType;
            this.date=date;
            this.transactionStatus=transactionStatus;
            this.transactionRemarks=transactionRemarks;
        }
}
