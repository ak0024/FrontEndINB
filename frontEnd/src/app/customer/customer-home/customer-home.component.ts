import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Domain/Customer';
import { Account } from 'src/app/Domain/account';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css'],
})
export class CustomerHomeComponent implements OnInit {
  customer: Customer = new Customer();
  accounts: Account[] = [];

  constructor(
    private customerservice: CustomerServicesService,
    private router: Router
  ) {}

  getCustomerByCustomerId(customerId: number) {}

  ngOnInit() {
    if (
      !localStorage.getItem('customerLoggedIn') ||
      localStorage.getItem('customerLoggedIn') === 'false'
    ) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text: 'First login to continue',
      });
      this.router.navigate(['']);
    }
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
    this.customerservice
      .getAccountByCustomerId(this.customer.customerId)
      .subscribe((data) => {
        this.accounts = data;
        console.log(this.accounts);
        localStorage.setItem('accounts', JSON.stringify(data));
      });
  }

  goToEditProfie() {
    this.router.navigate(['editprofile']);
  }

  logOut() {
    localStorage.setItem('customerLoggedIn', 'false');
    this.router.navigate(['']);
  }
}
