import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BankslipServiceService } from 'src/app/Service/bankslip-service.service';
import { BankSlip } from 'src/app/Domain/BankSlip';
import { Account } from 'src/app/Domain/account';

@Component({
  selector: 'app-claim-bankslip',
  templateUrl: './claim-bankslip.component.html',
  styleUrls: ['./claim-bankslip.component.css']
})
export class ClaimBankslipComponent implements OnInit {
  claimbankslip: BankSlip[] = [];
  accounts:Account[]=[];
  bankSlip: BankSlip = new BankSlip();
  flag: boolean = false;
  accountid:string=""
  

  constructor(private bankSlipServiceService: BankslipServiceService, private router: Router) { }

  ngOnInit(): void {
    
    this.accounts=JSON.parse(sessionStorage.getItem("accounts")|| '{}')

  }
  reloadBankSlip() {
    this.bankSlipServiceService.claimbankslip(this.accountid).subscribe(
      data => {
        this.claimbankslip = data;
        console.log(data);
      }
    )
  }
  message(claimbankslip: BankSlip) {
    claimbankslip.slipstatus = "In progress";
    this.bankSlipServiceService.updateBankslip(claimbankslip).subscribe(
      data => {
        this.bankSlip=data;
        console.log(data);
        this.flag = true;
      }
    );
  }
  onaccountChange(event:Event){
    this.accountid=(event.target as HTMLSelectElement).value;
    this.reloadBankSlip();
  }
}