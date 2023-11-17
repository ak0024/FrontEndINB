import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Domain/account';
import { Customer } from '../../Domain/customer';
import { CustomerRegistrationServiceService } from '../../Service/Customer-registration-Service.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private customerRegistrationService:CustomerRegistrationServiceService) { }

  ngOnInit() {
  }
  account:Account= new Account()

  register(){
    console.log(this.account)
    this.customerRegistrationService.createCustomerRegistration(this.account).subscribe(
      data=>{
        console.log(data)
        this.account=new Account()
      }
    )
  }


 
  
}
