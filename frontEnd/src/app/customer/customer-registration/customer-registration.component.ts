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
  ss: boolean = false;
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
  panNumberReq: boolean = false;
  aadharNumberReq: boolean = false;

  userNameValidate: string = '';
  passwordValidate: string = '';
  aadharNumberValidate: string = '';
  panNumberValidate: string = '';
  emailValidate:string='';

  word: any;

  aadharfile?: File;
  panfile?: File;
  constructor(
    private customerRegistrationService: CustomerRegistrationServiceService,
    private dataService: DataServiceService,
    private router: Router,
    private fileUploadDownloadService: FileUploadDownloadService
  ) {
    this.word = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.word);
  }

  loading: boolean = false; // Flag variable
  file?: File; // Variable to store file to Upload

  ngOnInit() {
    this.getStates();
    console.log(this.word);
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

  onPasswordChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!])(.{8,})$/;
    if (val === '') this.passwordValidate = '';
    else {
      if (regex.test(val)) {
        this.passwordValidate = 'valid';
        console.log('Valid pattern');
      } else {
        this.passwordValidate = 'invalid';
        console.log('Invalid pattern');
      }
    }
  }

  onConfirmPasswordChange(event: Event) {}

  onAadharNumberChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    const regex = /^\d{12}$/;
    if (val === '') this.aadharNumberValidate = '';
    else {
      if (regex.test(val)) {
        this.aadharNumberValidate = 'valid';
        console.log('Valid pattern');
      } else {
        this.aadharNumberValidate = 'invalid';
        console.log('Invalid pattern');
      }
    }
  }

  onPanNumberChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    const regex = /^[A-Z]{5}\d{4}[A-Z]$/;
    if (val === '') this.panNumberValidate = '';
    else {
      if (regex.test(val)) {
        this.panNumberValidate = 'valid';
        console.log('Valid pattern');
      } else {
        this.panNumberValidate = 'invalid';
        console.log('Invalid pattern');
      }
    }
  }

  onEmailChange(event:Event){
    const val = (event.target as HTMLSelectElement).value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (val === '') this.panNumberValidate = '';
    else {
      if (regex.test(val)) {
        this.panNumberValidate = 'valid';
        console.log('Valid pattern');
      } else {
        this.panNumberValidate = 'invalid';
        console.log('Invalid pattern');
      }
    }
  }

  onChange(event: any) {
    this.aadharfile = event.target.files[0];
  }

  onChangePan(event: any) {
    this.panfile = event.target.files[0];
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
    if (this.account.customer_id.zip === undefined) {
      this.zipReq = true;
    }
    if (this.account.customer_id.phone === undefined) {
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
    if (this.account.customer_id.aadharNumber === undefined) {
      this.aadharNumberReq = true;
    }
    if (this.account.customer_id.panCardNumber === "") {
      this.panNumberReq = true;
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
      this.aadharNumberReq ||
      this.panNumberReq ||
      this.userNameValidate === 'invalid' ||
      this.panNumberValidate === 'invalid' ||
      this.aadharNumberValidate === 'invalid'
    ) {
      this.router.navigate(['customerRegistration']);
      return;
    }
    console.log(this.account);
    this.customerRegistrationService
      .createCustomerRegistration(this.account)
      .subscribe((data: any) => {
        // console.log(data);
        console.log(data[0]);
        if (data[0] == 'success') {
          console.log('ulla varuthu');

          this.customerRegistrationService
            .uploadAadhar(
              this.aadharfile,
              this.account.customer_id.aadharNumber || 0
            )
            .subscribe((data) => {
              console.log(data);
            });
          this.customerRegistrationService
            .uploadPan(this.panfile, this.account.customer_id.panCardNumber)
            .subscribe((data) => {
              console.log(data);
            });
          console.log(data);
          const jsonObject = {
            status: data[0],
            inbNumber: data[1],
            accNumber: data[2],
          };
          const jsonString = JSON.stringify(jsonObject);
          localStorage.setItem('SuccessDetails', jsonString);
          this.router.navigateByUrl('registrationWaiting', {
            state: jsonObject,
          });
          return;
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: data,
          });
          this.router.navigate(['customerRegistration']);
          return;
        }
      });
  }
}
