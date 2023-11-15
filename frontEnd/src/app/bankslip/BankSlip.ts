import { Account } from "./account";

export class BankSlip{
    slipdate: string="";
    accountid:Account=new Account();
    chequeno: string="";
    chequedate: any=null;
    payerbank: string="";
    payeraccountid:Account=new Account();
    amount: number=0;
    slipstatus :string="";
    
}