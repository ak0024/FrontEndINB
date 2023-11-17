import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BankSlip } from '../BankSlip';
import { BankslipServiceService } from '../bankslip-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-bankslip',
  templateUrl: './claim-bankslip.component.html',
  styleUrls: ['./claim-bankslip.component.css']
})
export class ClaimBankslipComponent implements OnInit{
  claimbankslip: BankSlip[]=[];
  bankSlip :BankSlip = new BankSlip();
  showMessage: boolean = false;
  checknumber:string="";

  constructor(private bankSlipServiceService:BankslipServiceService, private router:Router){}

ngOnInit(): void{
  this.reloadBankSlip();

}
  reloadBankSlip() {
    this.bankSlipServiceService.claimbankslip().subscribe(
      data =>{
        this.claimbankslip=data;
        console.log(data);
      }
    )
  }
  Message(claimbankslip:BankSlip) {
    this.bankSlip.slipstatus="In progress"
    this.bankSlipServiceService.updateBankslip(this.bankSlip).subscribe(
      data=>{
        console.log(data)
        this.showMessage=true
      }
    );
  }
}