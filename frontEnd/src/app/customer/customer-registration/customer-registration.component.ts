import { Component, OnInit } from '@angular/core';


import { DataServiceService } from '../../Service/data-service.service';
import { CustomerRegistrationServiceService } from 'src/app/Service/Customer-registration-Service.service';
import { Account } from 'src/app/Domain/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  states: string[] = [];
  cities: string[] =[];
  selectedState: string ="";
 
 

  constructor(private customerRegistrationService:CustomerRegistrationServiceService,private dataService: DataServiceService,private router:Router) { }

  ngOnInit() {
    this.getStates();
  }
  account:Account= new Account()


  getStates() {
    this.dataService.getStates().subscribe((states: string[]) => {
      this.states = states;
    });
  }

  

  getCitiesByState(selectedState: string) {
    this.dataService.getCitiesByState(selectedState).subscribe((cities: string[]) => {
      this.cities = cities;
    });
  }

  onStateChange(event: Event) {
    const selectedState = (event.target as HTMLSelectElement).value;
    // Now, use selectedState as needed...
    this.getCitiesByState(selectedState);
  }
  

  register(){
    console.log(this.account)
    this.customerRegistrationService.createCustomerRegistration(this.account).subscribe(
      data=>{
        console.log(data)
        if(data[0]==='success')
        this.router.navigate(['registrationWaiting']);
      else
      this.router.navigate(['customerRegistration']);
        this.account=new Account()
      }
    )
  }
  validateAccount(){
    this.router.navigate(['registrationWaiting']);
      }


 
  
}
