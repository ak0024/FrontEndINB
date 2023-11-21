import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Domain/Customer';
import { Account } from 'src/app/Domain/account';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customer: Customer = new Customer();
  accounts: Account[] = [];
  constructor(private customerservice: CustomerServicesService) { }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('customer') || '{}');
    this.customerservice
      .getAccountByCustomerId(this.customer.customerId)
      .subscribe((data) => {
        this.accounts = data;
        console.log(this.accounts);
        sessionStorage.setItem('accounts', JSON.stringify(data));
      });
    this.accounts=JSON.parse(sessionStorage.getItem("accounts")||'{}')
    console.log(this.accounts)
    
  }

}
