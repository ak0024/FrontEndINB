import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Domain/Customer';
import { Account } from 'src/app/Domain/account';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  customer: Customer = new Customer();
  account: Account = new Account();
  ngOnInit(): void {
    this.customer = JSON.parse(sessionStorage.getItem('customer') || '{}');
  }
  constructor(private customerServicesService: CustomerServicesService) {}

  createaccount() {
    this.account.customer_id.customerId = this.customer.customerId;
    if (this.account.account_type === "") {
      Swal.fire({
        title: 'Select Account type for process',
        icon: 'error',
      });
    } else {
      this.customerServicesService
        .addnewAccount(this.account)
        .subscribe((data) => {
          console.log(data);
          Swal.fire({
            title: 'Account is in approval process',
            icon: 'success',
          });
        });
    }
  }
}
