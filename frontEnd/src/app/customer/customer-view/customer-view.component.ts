import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Domain/Customer';
import { Account } from 'src/app/Domain/account';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customer: Customer = new Customer();
  accounts: Account[] = [];
  showPassword: boolean = false;
  constructor(private customerservice: CustomerServicesService,
    private router: Router) { }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('customer') || '{}');
    this.customerservice
      .getAccountByCustomerId(this.customer.customerId)
      .subscribe((data) => {
        this.accounts = data;
        console.log(this.accounts);
        sessionStorage.setItem('accounts', JSON.stringify(data));
      });
    this.accounts = JSON.parse(sessionStorage.getItem("accounts") || '{}')
    console.log(this.accounts)

  }
  toSendMoney(item: Account) {
    this.router.navigate(['customerHome/send-money/' + item.account_id])

  }


  openPopup(account: Account) {
    if (account.account_type == "Savings") {
      if (account.fixedDeposit == "YES") {
        Swal.fire({
          title: "Account Details",
          html: `
        <table>
          <tr>
            <td>Account Id</td>
            <td>${account.account_id}</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>${account.current_balance}</td>
          </tr>
          <tr>
            <td>Fixed Deposit</td>
            <td>${account.fixedDeposit}</td>
          </tr>
          <tr>
            <td>Fixed Deposit Month</td>
            <td>${account.fdMonths}</td>
          </tr>
          <tr>
            <td>Fixed Deposit Interest</td>
            <td>${account.fdRateOfInterest}</td>
          </tr>
          <tr>
            <td>Start date - End date</td>
            <td>${account.startDate} - ${account.endDate}</td>
          </tr>
        </table>
      `,
          icon: "info"
        })
      } else {
        Swal.fire({
          title: "Account Details",
          html: `
        <table>
          <tr>
            <td>Account Id</td>
            <td>${account.account_id}</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>${account.current_balance}</td>
          </tr>
          <tr>
            <td>Fixed Deposit</td>
            <td>${account.fixedDeposit}</td>
          </tr>
        </table>
      `,
          icon: "info"
        })
      }
    } else {
      Swal.fire({
        title: "Account Details",
        html: `
      <table>
        <tr>
          <td>Account Id</td>
          <td>${account.account_id}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>${account.current_balance}</td>
        </tr>
        <tr>
          <td>Over draft limit</td>
          <td>${account.overdraft_limit}</td>
        </tr>
        <tr>
          <td>Over draft Intrest</td>
          <td>${account.rate_of_interest}</td>
        </tr>
      </table>
    `,
        icon: "info"
      })

    }


  }


}
