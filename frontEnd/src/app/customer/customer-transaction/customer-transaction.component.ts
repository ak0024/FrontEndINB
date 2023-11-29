import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/Domain/Transaction';
import { Account } from 'src/app/Domain/account';
import { TransactionService } from 'src/app/Service/transaction.service';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.css'],
})
export class CustomerTransactionComponent implements OnInit {
  transaction: Transaction[] = [];
  accountId: string = '';
  accounts: Account[] = [];
  constructor(
    private router: Router,
    private transactionservice: TransactionService
  ) {}

  ngOnInit(): void {
    this.accounts = JSON.parse(localStorage.getItem('accounts') || '{}');
  }
  reloadtransaction() {
    this.transactionservice.transaction(this.accountId).subscribe((data) => {
      this.transaction = data;
      const sortedTransactions = this.transaction.sort((a, b) => {
        const dateA: any = new Date(a.dateAndTime);
        const dateB: any = new Date(b.dateAndTime);

        return dateB - dateA;
      });
      console.log(data);
      console.log(sortedTransactions);
    });
  }

  onaccountChange(event: Event) {
    this.accountId = (event.target as HTMLSelectElement).value;
    this.reloadtransaction();
  }
}
