import { Customer } from "./Customer";

export class CustomerLogin {

    userName:string="";
	password:string="";
	passwordReachLimit:number=0;
	customer:Customer | null=null;
	message:string="";

}
