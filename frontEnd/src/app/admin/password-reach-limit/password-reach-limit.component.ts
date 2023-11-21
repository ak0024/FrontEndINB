import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Domain/Customer';
import { Admin } from 'src/app/Domain/admin';
import { AdminApprovalService } from 'src/app/Service/admin-approval.service';
import { AdminloginService } from 'src/app/Service/adminlogin.service';

@Component({
  selector: 'app-password-reach-limit',
  templateUrl: './password-reach-limit.component.html',
  styleUrls: ['./password-reach-limit.component.css']
})
export class PasswordReachLimitComponent implements OnInit {
admin:Admin = new Admin();
customers:Customer[] = [];

  constructor(private adminApproval:AdminApprovalService) { }

  ngOnInit() {
    this.onReload();
  }

  onReload() {
    this.adminApproval.updatePasswordCount().subscribe((data)=>{
      this.customers=data;
      console.log(data);
      
    }
    );
  }

  resetPassword(customerId:string){
    this.adminApproval.resetPasswordCount(customerId).subscribe(
      data=>{
        if(data){
          this.onReload()
        }
      }
    )
  }

}  

