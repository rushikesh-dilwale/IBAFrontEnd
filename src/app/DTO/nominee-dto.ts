export class NomineeDTO {
    nomineeId:number;
    name:string;
    govtId:string;
    govtIdType:string;
    phoneNo:string;
    relation:string;
    constructor(
        nomineeId:number,
        name:string,
        govtId:string,
        govtIdType:string,
        phoneNo:string,
        relation:string
    ){
        this.nomineeId=nomineeId;
        this.name=name;
        this.govtId=govtId;
        this.govtIdType=govtIdType;
        this.phoneNo=phoneNo;
        this.relation=relation;
    }
}

