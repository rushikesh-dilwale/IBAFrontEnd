export class ResetPass {
    password:string="";
    otp:number=0;
    email:string="";

    constructor(pass:string,otp:number,email:string){
        this.password=pass;
        this.otp=otp;
        this.email=email;
    }
}
