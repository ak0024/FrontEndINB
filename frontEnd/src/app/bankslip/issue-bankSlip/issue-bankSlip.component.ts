import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  ngOnInit() {
    this.accounts=JSON.parse(sessionStorage.getItem("accounts")|| '{}')
  }
  onaccountChange(event:Event){
  this.accountid=(event.target as HTMLSelectElement).value;
  console.log(this.accountid)
    
  }

}
