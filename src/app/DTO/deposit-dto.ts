export class DepositDTO {

   
    transactionRemarks:string;

    constructor(transactionStatus:string,
        transactionRemarks:string
    ){
        this.transactionRemarks=transactionRemarks
    }
}
