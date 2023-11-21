import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Domain/Customer';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  customerId: string='';
  customer : Customer = new Customer();

  firstName: string='';
  lastName: string='';
  userName: string='';
  addressLine1: string='';
  addressLine2: string='';
  addressLine3: string='';
  city: string='';
  state: string='';
  zip: number=0;
  phone: number=0;
  cell: number=0;
  email: string='';
  
  flag: boolean = false;

  constructor( private router: Router, private customerService : CustomerServicesService, private activatedRouter: ActivatedRoute ){

  }


  ngOnInit(): void {
    this.customerId = this.activatedRouter.snapshot.params['customerId'];
    this.customer=JSON.parse(sessionStorage.getItem("customer")||'{}')
    // this.customerService.getCustomerbyCustomerId(this.customerId).subscribe(
    //   data => {
    //     this.customer = data;
    //     console.log(this.customer);
        
    //   }
    // );
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.customer).subscribe(
      data =>{
        console.log(data);
        this.flag= true;
        
      }
    );
  }

  goToHome(){
    this.router.navigate(['']);
  }
}
