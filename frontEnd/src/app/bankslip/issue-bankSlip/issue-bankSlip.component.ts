import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankSlip } from 'src/app/Domain/BankSlip';
import { Account } from 'src/app/Domain/account';
import { BankslipServiceService } from 'src/app/Service/bankslip-service.service';

@Component({
  selector: 'app-issue-bankSlip',
  templateUrl: './issue-bankSlip.component.html',
  styleUrls: ['./issue-bankSlip.component.css']
})
export class IssueBankSlipComponent implements OnInit {

  constructor(private router:Router,private bankSlipServiceService: BankslipServiceService) { }
  accounts:Account[]=[];
  accountid:string=""
  bankslip:BankSlip=new BankSlip()
  
  ngOnInit() {
    this.accounts=JSON.parse(sessionStorage.getItem("accounts")|| '{}')
  }
  onaccountChange(event:Event){
  this.accountid=(event.target as HTMLSelectElement).value;
  console.log(this.accountid)
    
  }

  issueCheck(){
    this.bankslip.accountid.account_id=this.accountid
    this.bankSlipServiceService.createbankslip(this.bankslip).subscribe(
      data=>{
        console.log(data)
      }
    )

  }

}
