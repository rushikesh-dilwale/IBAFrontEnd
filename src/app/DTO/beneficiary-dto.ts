export class BeneficiaryDto {

    // private long  beneficiaryId;
	// private String beneficiaryName;
	// private long  beneficiaryAccNo;
	// private String IFSC;
	// private AccountType accountType;

    beneficiaryId: number;
    beneficiaryName: string;
    beneficiaryAccNo: number;
    ifsc: string;
    accountType: string;

    constructor(
        beneficiaryId: number,
        beneficiaryName: string,
        beneficiaryAccNo: number,
        ifsc: string,
        accountType: string
    ){
        this.beneficiaryId = beneficiaryId;
        this.beneficiaryName = beneficiaryName;
        this.beneficiaryAccNo = beneficiaryAccNo;
        this.ifsc = ifsc;
        this.accountType = accountType;
    }
}
