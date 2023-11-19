import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../../Service/data-service.service';
import { CustomerRegistrationServiceService } from 'src/app/Service/Customer-registration-Service.service';
import { Account } from 'src/app/Domain/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
})
export class CustomerRegistrationComponent implements OnInit {
  states: string[] = [];
  cities: string[] = [];
  selectedState: string = '';


  firstNameReq: boolean = false;
  lastNameReq: boolean = false;
  address1Req: boolean = false;
  stateReq: boolean = false;
  cityReq: boolean = false;
  zipReq: boolean = false;
  phoneReq: boolean = false;
  emailReq: boolean = false;
  accountTypeReq: boolean = false;
  userNameReq: boolean = false;
  passwordReq: boolean = false;
  confirmPasswordReq: boolean = false;



  constructor(
    private customerRegistrationService: CustomerRegistrationServiceService,
    private dataService: DataServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStates();
  }
  account: Account = new Account();
  confirmPassword: string = ""

  getStates() {
    this.dataService.getStates().subscribe((states: string[]) => {
      this.states = states;
    });
  }

  getCitiesByState(selectedState: string) {
    this.dataService
      .getCitiesByState(selectedState)
      .subscribe((cities: string[]) => {
        this.cities = cities;
      });
  }

  onStateChange(event: Event) {
    const selectedState = (event.target as HTMLSelectElement).value;
    // Now, use selectedState as needed...
    this.getCitiesByState(selectedState);
  }

  register() {
    if (this.account.customer_id.firstName === "") {
      this.firstNameReq = true
    }
    if (this.account.customer_id.lastName === "") {
      this.lastNameReq = true
    }
    if (this.account.customer_id.addressLine1 === "") {
      this.address1Req = true
    }
    if (this.account.customer_id.state === "") {
      this.stateReq = true
    }
    if (this.account.customer_id.state !== "" && this.account.customer_id.city === "") {
      this.cityReq = true
    }
    if(this.account.customer_id.zip===0){
      this.zipReq=true
    }
    if (this.account.customer_id.phone === 0) {
      this.phoneReq = true
    }
    if (this.account.customer_id.email === "") {
      this.emailReq = true
    }
    if (this.account.account_type === "") {
      this.accountTypeReq = true
    }
    if (this.account.customer_id.userName === "") {
      this.userNameReq = true
    }
    if (this.account.customer_id.password === "") {
      this.passwordReq = true
    }
    if (this.confirmPassword === "") {
      this.confirmPasswordReq = true
    }


    this.router.navigate(['customerRegistration']);
    console.log(this.account);
    this.customerRegistrationService
      .createCustomerRegistration(this.account)
      .subscribe((data) => {
        console.log(data);
        if (data[0] === 'success')
          this.router.navigate(['registrationWaiting']);
        else this.router.navigate(['customerRegistration']);
        this.account = new Account();
      });
  }
}
