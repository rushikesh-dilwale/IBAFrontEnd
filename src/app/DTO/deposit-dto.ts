export class DepositDTO {

    transactionStatus:string;
    transactionRemarks:string;

    constructor(transactionStatus:string,
        transactionRemarks:string
    ){
        this.transactionStatus=transactionStatus;
        this.transactionRemarks=transactionRemarks
    }
}
