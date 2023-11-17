import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/bankslip/account';
import { CustomerRegistrationServiceService } from './Customer-registration-Service.service';
import { Observable, of } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  states: string[] = [];
  cities: string[] =[];
  selectedState: string ="";
 
 

  constructor(private customerRegistrationService:CustomerRegistrationServiceService,private dataService: DataServiceService) { }

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
        this.account=new Account()
      }
    )
  }


 
  
}
