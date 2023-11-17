export class Mail {
    body :string='';
    subject:string="";
    recipient:string="";
    constructor(body:string,subject:string,recipient:string){
        this.body=body;
        this.recipient=recipient;
        this.subject=subject;
    }
}
