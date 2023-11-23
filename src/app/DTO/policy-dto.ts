export class PolicyDto {
    policyNumber:number;
    policyName:string;
    policyPremiumAmount:number;
    policySumAssured:number;
    policyExpiryDate:string;

    constructor(
        policyNumber:number,
        policyName:string,
        policyPremiumAmount:number,
        policySumAssured:number,
        policyExpiryDate:string
    ){
        this.policyNumber=policyNumber;
        this.policyName=policyName;
        this.policyPremiumAmount=policyPremiumAmount;
        this.policySumAssured=policySumAssured;
        this.policyExpiryDate=policyExpiryDate;
    }
}
