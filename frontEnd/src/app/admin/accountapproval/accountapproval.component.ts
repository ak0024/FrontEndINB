import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Domain/account';
import { Admin } from 'src/app/Domain/admin';
import { AdminApprovalService } from 'src/app/Service/admin-approval.service';

@Component({
  selector: 'app-accountapproval',
  templateUrl: './accountapproval.component.html',
  styleUrls: ['./accountapproval.component.css']
})
export class AccountapprovalComponent  implements OnInit{
admin:Admin= new Admin();
accounts: Account[] = [];

constructor(private adminServie: AdminApprovalService){

}
  ngOnInit(): void {
    this.onReload();
  }

  onReload() {
    this.adminServie.accountStatus().subscribe((data) => {
      this.accounts = data;
      console.log(data);
    });
  }

  acceptAccount(accountId:string){
    this.adminServie.acceptCustomer(accountId).subscribe(
      data=>{
        if(data){
          this.onReload()
        }
      }
    )
    
  }

  rejectAccount(accountId:string){
    this.adminServie.rejectAccount(accountId).subscribe(
      data=>{
        if(data){
          this.onReload()
        }
      }
    )
  }
}
