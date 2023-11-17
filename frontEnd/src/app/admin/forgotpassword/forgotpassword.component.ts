import { Component } from '@angular/core';
import { Admin } from '../adminlogin/admin';
import { AdminloginService } from '../adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
admin:Admin= new Admin();

constructor(private adminLoginService:AdminloginService,private router:Router){}
  
forgotPassword(){
  if(this.admin.adminPassword!=this.admin.confirmPassword){
  console.log("not same password");
  this.admin.message="password mismatch!";
  }
  else{
  this.adminLoginService.forgotPassword(this.admin).subscribe(
    data=>{
      console.log(this.admin);
      
      if(data=== null){
      console.log("Error");
      this.admin.message="Admin not Found";
    }
      else{
      console.log(data);
      this.admin=data;
      this.admin.message="password changed succesfully!";
      this.router.navigate(['adminlogin']);
    }
    }
  )
    }
      
      
    }
  
  }

