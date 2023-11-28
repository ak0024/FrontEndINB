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

  isNextThreeMonthsBeforeToday(date:string): boolean {
    const dateObject = new Date(date);
    dateObject.setMonth(dateObject.getMonth()+3)
    console.log(dateObject.getMonth());
    
    
    const today = new Date();
    console.log(date,today);
    
    return today < dateObject;
  }
  onReload() {
    this.adminServie.claimedBankslip().subscribe((data) => {
      this.bankslips = data;
      console.log(data);
    });
  }

  acceptBankslip(bankSlip:BankSlip){
    this.adminServie.acceptBankslip(bankSlip).subscribe(
      data=>{
        if(data){
          this.flag = data;
          this.onReload();
        }
      }
    )
    
  }

  rejectBankslip(bankSlip:BankSlip){
    this.adminServie.rejectBankslip(bankSlip).subscribe(
      data=>{
        if(data){
          this.flag = data; 
          this.onReload();
        }
      }
    )
  }
  bounceBankslip(bankSlip:BankSlip){
    console.log(bankSlip)
    this.adminServie.bounceBankslip(bankSlip).subscribe(
      data=>{
        if(data){
          this.flag = data;
          this.onReload();
        }
      }
    )
  }
}
