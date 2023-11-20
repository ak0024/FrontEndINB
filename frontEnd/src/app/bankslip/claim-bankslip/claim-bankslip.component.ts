import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BankslipServiceService } from 'src/app/Service/bankslip-service.service';
import { BankSlip } from 'src/app/Domain/BankSlip';

@Component({
  selector: 'app-claim-bankslip',
  templateUrl: './claim-bankslip.component.html',
  styleUrls: ['./claim-bankslip.component.css']
})
export class ClaimBankslipComponent implements OnInit {
  claimbankslip: BankSlip[] = [];
  bankSlip: BankSlip = new BankSlip();
  flag: boolean = false;
  

  constructor(private bankSlipServiceService: BankslipServiceService, private router: Router) { }

  ngOnInit(): void {
    this.reloadBankSlip();

  }
  reloadBankSlip() {
    this.bankSlipServiceService.claimbankslip().subscribe(
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
}