import { Component } from '@angular/core';
import { Admin } from './admin';
import { AdminloginService } from '../adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
admin:Admin = new Admin();
constructor(private adminLoginServices: AdminloginService, private router: Router){}

adminLogin(){
  this.adminLoginServices.validateAdminLogin(this.admin).subscribe(
    data=>{
      console.log(data);
      this.admin=data;
      if(this.admin.message=="Login Success")
          this.router.navigate(['adminhome'])
        else
          this.router.navigate([''])   
      
    }
  )
}
goToCustomer(){
  this.router.navigate([''])
}
}
