import { Account } from "./account"


export class Transaction {

     transactionId:string=""
     dateAndTime:any=""
    transactionType:string=""
      transactionStatus:string=""
      amount:number=0
      fromAccount:Account=new Account()

      toAccount:Account=new Account()
}
