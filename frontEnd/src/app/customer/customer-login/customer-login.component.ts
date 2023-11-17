import { Component } from '@angular/core';
import { CustomerLogin } from '../../domain/CustomerLogin';
import { LoginServiceService } from '../../services/LoginService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

  customerLogin:CustomerLogin=new CustomerLogin();
  constructor(private loginServive:LoginServiceService,private router:Router) { }
  login(){
    this.loginServive.validateLogin(this.customerLogin).subscribe(
      data=>{
        console.log(data);
        this.customerLogin=data
        if(this.customerLogin.message=="Login Success")
          this.router.navigate(['customerHome'])
        else
          this.router.navigate([''])   
      }
    );
  }
  goToAdmin(){
    this .router.navigate(['adminlogin'])
  }
}
