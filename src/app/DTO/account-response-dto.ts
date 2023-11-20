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

/*
	private long accountId;
	private String accountHolderName;
	private String phoneNo;
	private String emailId;
	private int age;
	private Gender gender;
	private double interestRate;
	private double balance;
	private LocalDate dateOfOpening;

*/


    
    constructor(
        accountId:number,
        accountHolderName:string,
        phoneNumber:string,
        emailId:string,
        age:number,
        gender:string,
        interestRate: number,
        balance:number,
        dateOfOpening:String
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
    }
}
