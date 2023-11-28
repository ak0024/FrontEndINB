import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Domain/Customer';
import { Admin } from 'src/app/Domain/admin';
import { AdminApprovalService } from 'src/app/Service/admin-approval.service';

@Component({
  selector: 'app-customerapproval',
  templateUrl: './customerapproval.component.html',
  styleUrls: ['./customerapproval.component.css'],
})
export class CustomerapprovalComponent implements OnInit {
  admin: Admin = new Admin();
  customers: Customer[] = [];

  constructor(private adminServie: AdminApprovalService) {}

  ngOnInit() {
    this.onReload();
  }

  onReload() {
    this.adminServie.customerStatus().subscribe((data) => {
      this.customers = data;
      console.log(data);
    });
  }

  acceptCustomer(customerId:string){
    this.adminServie.acceptCustomer(customerId).subscribe(
      data=>{
        if(data){
          this.onReload()
        }
      }
    )
    
  }

  getAadharFileUrl(customer:string): string {
    // Assuming your API endpoint is 'http://localhost:8082/adminapi/aadharfile/'
    return `http://localhost:8082/adminapi/aadharfile/${customer}`;
  }

  rejectCustomer(customerId:string){
    this.adminServie.rejectCustomer(customerId).subscribe(
      data=>{
        if(data){
          this.onReload()
        }
      }
    )
  }
}
