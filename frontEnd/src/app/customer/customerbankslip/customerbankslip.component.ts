import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerbankslip',
  templateUrl: './customerbankslip.component.html',
  styleUrls: ['./customerbankslip.component.css']
})
export class CustomerbankslipComponent {
 
constructor(private router:Router)
{}

gotoissuebankslip(){
this.router.navigate(['customerHome/bankslip/issuebankslip'])
}
gotoclaimbankslip(){
this.router.navigate(['customerHome/bankslip/'])
}
}
