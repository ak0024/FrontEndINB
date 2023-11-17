import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/bankslip/account';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  account:Account=new Account();
  
  customer:Customer=new Customer();

  constructor( ) { }

  ngOnInit() {
  }

 
  
}
