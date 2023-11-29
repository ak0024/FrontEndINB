import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankSlip } from 'src/app/Domain/BankSlip';
import { Account } from 'src/app/Domain/account';
import { BankslipServiceService } from 'src/app/Service/bankslip-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issue-bankSlip',
  templateUrl: './issue-bankSlip.component.html',
  styleUrls: ['./issue-bankSlip.component.css'],
})
export class IssueBankSlipComponent implements OnInit {
  constructor(
    private router: Router,
    private bankSlipServiceService: BankslipServiceService
  ) {}
  accounts: Account[] = [];
  accountid: string = '';
  bankslip: BankSlip = new BankSlip();

  fromAccountIdReq: boolean = false;
  toAccountIdReq: boolean = false;
  dateReq: boolean = false;
  amountReq: boolean = false;

  ngOnInit() {
    this.accounts = JSON.parse(localStorage.getItem('accounts') || '{}');
  }
  onaccountChange(event: Event) {
    this.accountid = (event.target as HTMLSelectElement).value;
    console.log(this.accountid);
    this.fromAccountIdReq=false
  }

  issueCheck() {
    this.bankslip.accountid.account_id = this.accountid;
    if (this.accountid == '') this.fromAccountIdReq = true;
    if(this.bankslip.payeraccountid.account_id=='') this.toAccountIdReq=true
    if(this.bankslip.chequedate==null)this.dateReq=true
    if(this.bankslip.amount==0) this.amountReq=true
    if(this.fromAccountIdReq || this.toAccountIdReq || this.dateReq || this.amountReq){
      return
    }
    this.bankSlipServiceService
      .createbankslip(this.bankslip)
      .subscribe((data) => {
        console.log(data);
        if(data){
          Swal.fire("Success", "Bankslip created successfully", "success");
        }
        else
          Swal.fire("Error","BankSlip not created","error")
      });
  }
}
