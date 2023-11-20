import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Domain/Customer';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css'],
})
export class CustomerHomeComponent implements OnInit {
  allCustomers: Customer[] = [];

  constructor(
    private customerservice: CustomerServicesService,
    private router: Router
  ) {}

  getCustomerByCustomerId(customerId: number) {}

  ngOnInit() {
    if (!sessionStorage.getItem('customerLoggedIn')) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title:"Error",
        text:"First login to continue"
    })
      this.router.navigate(['']);
    }
  }

  goToEditProfie() {
    this.router.navigate(['editprofile']);
  }

  logOut() {
    this.router.navigate(['']);
  }
}
