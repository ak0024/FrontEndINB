import { Component, OnInit } from '@angular/core';
import { BankSlip } from 'src/app/Domain/BankSlip';
import { Admin } from 'src/app/Domain/admin';
import { AdminApprovalService } from 'src/app/Service/admin-approval.service';

@Component({
  selector: 'app-bank-slip-approval',
  templateUrl: './bank-slip-approval.component.html',
  styleUrls: ['./bank-slip-approval.component.css']
})
export class BankSlipApprovalComponent implements OnInit {
admin:Admin = new Admin();
bankslip:BankSlip= new BankSlip;
bankslips:BankSlip[]=[];
flag:boolean=false;
  constructor(private adminServie: AdminApprovalService) { }

  ngOnInit() {
    this.onReload();
  }

  onReload() {
    this.adminServie.claimedBankslip().subscribe((data) => {
      this.bankslips = data;
      console.log(data);
    });
  }

  acceptBankslip(chequeno:string){
    this.adminServie.acceptBankslip(chequeno).subscribe(
      data=>{
        if(data){
          this.flag = data;
          this.onReload();
        }
      }
    )
    
  }

  rejectBankslip(chequeno:string){
    this.adminServie.rejectBankslip(chequeno).subscribe(
      data=>{
        if(data){
          this.flag = data; 
          this.onReload();
        }
      }
    )
  }
  bounceBankslip(chequeno:string){
    this.adminServie.bounceBankslip(chequeno).subscribe(
      data=>{
        if(data){
          this.flag = data;
          this.onReload();
        }
      }
    )
  }
}
