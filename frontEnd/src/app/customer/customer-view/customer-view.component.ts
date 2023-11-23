import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.accounts=JSON.parse(sessionStorage.getItem("accounts")||'{}')
    console.log(this.accounts)
    
  }
  toSendMoney(item:Account){
    this.router.navigate(['customerHome/send-money/'+item.account_id])
          
    }

    togglePassword() {
      this.showPassword = !this.showPassword;
    }

}
