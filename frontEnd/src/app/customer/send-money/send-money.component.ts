import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/Domain/Transaction';
import { CustomerServicesService } from 'src/app/Service/customer-services.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
  transaction:Transaction=new Transaction()
  accountId:String=""
  message:string=""
  constructor(private router :Router, private activated:ActivatedRoute
    ,private customerService:CustomerServicesService) { }

  ngOnInit() {
   this.transaction.fromAccount.account_id= this.activated.snapshot.params["accountId"]
   console.log(this.transaction.fromAccount.account_id);
   
  }
sendMoney(transaction:Transaction){
console.log(transaction);

this.customerService.sendMoney(transaction).subscribe(
  data=>{
    console.log(data)
    this.message=data[1]
  }
)


}

}
