import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';
import { Customer } from '../../Domain/customer';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  // allCustomers: Customer[] = [];

  // constructor( private customerservice: CustomerServicesService, private router: Router) {


  //  }

  //  getCustomerByCustomerId(customerId: number){

  //  }


  ngOnInit() {

  }

}
