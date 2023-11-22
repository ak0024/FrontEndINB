import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/Domain/Transaction';
import { TransactionService } from 'src/app/Service/transaction.service';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.css']
})
export class CustomerTransactionComponent implements OnInit {
  transaction:Transaction[]=[];
  accountId:string="ACC151"
  constructor(private router: Router,private transactionservice : TransactionService) { }

  ngOnInit(): void {
    this.reloadtransaction();

  }
  reloadtransaction() {
    
    this.transactionservice.transaction(this.accountId).subscribe(
      data => {
        this.transaction= data;
        console.log(data);
      }
    )
  }
  

}
