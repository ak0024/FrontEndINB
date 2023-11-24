import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Domain/Customer';
import { CustomerLogin } from 'src/app/Domain/CustomerLogin';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';

@Component({
  selector: 'app-customerforgotpassword',
  templateUrl: './customerforgotpassword.component.html',
  styleUrls: ['./customerforgotpassword.component.css']
})
export class CustomerforgotpasswordComponent {
  customer:Customer= new Customer();

  constructor(private customerService:CustomerServicesService,private router:Router){}
    
  forgotPassword(){
    if(this.customer.password!=this.customer.confirmPassword){
    console.log("not same password");
    this.customer.message="password mismatch!";
    }
    else{
    this.customerService.changePassword(this.customer).subscribe(
      data=>{
        console.log(this.customer);
        
        if(data=== null){
        console.log("Error");
        this.customer.message="User not Found";
      }
        else{
        console.log(data);
        this.customer=data;
        this.customer.message="Password changed succesfully!";
        this.router.navigate(['']);
      }
      }
    )
      }
      setTimeout(() => {
        alert('Password updated successfully!');
        location.reload(); 
      }, 2000);
        
      }
      
}
