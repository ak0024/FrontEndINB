import { Customer } from "./Customer";





export class Account{
     opening_date : any=null;
	 minimum_balance: number=0;
	 current_balance:number=0;
	 rate_of_interest:number=0;
	 account_id:string="";
	 account_type:string="";
	 overdraft_limit:number=0;
	 overdraft_rate_of_interest:number=0;
	 customer_id:Customer = new Customer();
	 fixedDeposit:string="";
	 fdMonths:number=0;
	 fdRateOfInterest:number=0;
	 startDate:any=null;
	 endDate:any=null;
    
}