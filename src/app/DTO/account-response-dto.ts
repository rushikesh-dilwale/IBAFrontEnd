export class AccountResponseDTO {
    accountId:number;
    accountHolderName:string;
    phoneNo:string;
    emailId:string;
    age:number;
    gender:string;
    interestRate: number;
    balance:number;
    dateOfOpening:String;
    accountStatus:string;

    constructor(
        accountId:number,
        accountHolderName:string,
        phoneNumber:string,
        emailId:string,
        age:number,
        gender:string,
        interestRate: number,
        balance:number,
        dateOfOpening:String,
        accountStatus:string
    ){
        this.accountId = accountId;
        this.accountHolderName = accountHolderName;
        this.phoneNo = phoneNumber;
        this.emailId = emailId;
        this.age = age;
        this.gender = gender;
        this.interestRate = interestRate;
        this.balance = balance;
        this.dateOfOpening = dateOfOpening;
        this.accountStatus = accountStatus;
    }
}
