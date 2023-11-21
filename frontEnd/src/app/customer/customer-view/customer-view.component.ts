import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Domain/account';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  accounts: Account[] = [];
  constructor() { }

  ngOnInit() {
    this.accounts=JSON.parse(sessionStorage.getItem("accounts")||'{}')
    
  }

}
