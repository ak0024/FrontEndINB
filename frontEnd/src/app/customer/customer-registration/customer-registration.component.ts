import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../../Service/data-service.service';
import { CustomerRegistrationServiceService } from 'src/app/Service/Customer-registration-Service.service';
import { Account } from 'src/app/Domain/account';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Domain/Customer';
import Swal from 'sweetalert2';
import { FileUploadDownloadService } from 'src/app/Service/file-upload-download.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
})
export class CustomerRegistrationComponent implements OnInit {
  states: string[] = [];
  cities: string[] = [];
  selectedState: string = '';
  customer: Customer = new Customer();

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

  userNameValidate: string = '';

  word:any
  constructor(
    private customerRegistrationService: CustomerRegistrationServiceService,
    private dataService: DataServiceService,
    private router: Router,
    private fileUploadDownloadService: FileUploadDownloadService
    
  ) {
    this.word=this.router.getCurrentNavigation()?.extras.state;
  }

  loading: boolean = false; // Flag variable
  file?: File; // Variable to store file to Upload

  ngOnInit() {
    this.getStates();
    console.log(this.word)
  }
  account: Account = new Account();
  confirmPassword: string = '';

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

  validatePassword() {
    if (this.account.customer_id.password != this.confirmPassword) {
      console.log('not same password');
      this.customer.message = 'password mismatch!';
    } else {
      this.account.customer_id.password = this.confirmPassword;
      console.log('this.customer');
      this.customer.message = 'password matched';
    }
  }

  onStateChange(event: Event) {
    const selectedState = (event.target as HTMLSelectElement).value;
    // Now, use selectedState as needed...
    this.getCitiesByState(selectedState);
  }

  onUsernameChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (val === '') this.userNameValidate = '';
    else {
      if (regex.test(val)) {
        this.userNameValidate = 'valid';
        console.log('Valid pattern');
      } else {
        this.userNameValidate = 'invalid';
        console.log('Invalid pattern');
      }
    }
  }



  register() {
    if (this.account.customer_id.firstName === '') {
      this.firstNameReq = true;
    }
    if (this.account.customer_id.lastName === '') {
      this.lastNameReq = true;
    }
    if (this.account.customer_id.addressLine1 === '') {
      this.address1Req = true;
    }
    if (this.account.customer_id.state === '') {
      this.stateReq = true;
    }
    if (
      this.account.customer_id.state !== '' &&
      this.account.customer_id.city === ''
    ) {
      this.cityReq = true;
    }
    if (this.account.customer_id.zip === 0) {
      this.zipReq = true;
    }
    if (this.account.customer_id.phone === 0) {
      this.phoneReq = true;
    }
    if (this.account.customer_id.email === '') {
      this.emailReq = true;
    }
    if (this.account.account_type === '') {
      this.accountTypeReq = true;
    }
    if (this.account.customer_id.userName === '') {
      this.userNameReq = true;
    }
    if (this.account.customer_id.password === '') {
      this.passwordReq = true;
    }
    if (this.confirmPassword === '') {
      this.confirmPasswordReq = true;
    }
    if (
      this.firstNameReq ||
      this.lastNameReq ||
      this.address1Req ||
      this.stateReq ||
      this.cityReq ||
      this.zipReq ||
      this.phoneReq ||
      this.emailReq ||
      this.accountTypeReq ||
      this.userNameReq ||
      this.passwordReq ||
      this.confirmPasswordReq ||
      this.userNameValidate === 'invalid'
    )
      this.router.navigate(['customerRegistration']);
    console.log(this.account);
    this.customerRegistrationService
      .createCustomerRegistration(this.account)
      .subscribe((data:any) => {
        // console.log(data);
        if (data[0] === 'success')
          this.router.navigateByUrl('registrationWaiting', { state: data });
        
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: data,
        })
        this.router.navigate(['customerRegistration']);
        this.account = new Account();
      });
  }
  onChange(event : any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    if (this.file) {
      console.log(this.file);
      this.fileUploadDownloadService.upload(this.file).subscribe(
        data => {
          console.log(data);
        }
      );
    }
  }
}
