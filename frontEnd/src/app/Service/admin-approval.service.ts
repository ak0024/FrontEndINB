import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Domain/Customer';
import { HttpClient } from '@angular/common/http';
import { Account } from '../Domain/account';
import { BankSlip } from '../Domain/BankSlip';

@Injectable({
  providedIn: 'root'
})
export class AdminApprovalService {

  constructor(private httpClient: HttpClient) { }

  customerStatus():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:8082/adminapi/customerStatus");
  }

  acceptCustomer(customerId:string):Observable<boolean>{
    return this.httpClient.get<boolean>("http://localhost:8082/adminapi/acceptCustomer/"+customerId);
  }
  
  rejectCustomer(customerId:string):Observable<boolean>{
    return this.httpClient.delete<boolean>("http://localhost:8082/adminapi/rejectCustomer/"+customerId);
  }

  accountStatus():Observable<Account[]>{
    return this.httpClient.get<Account[]>("http://localhost:8082/adminapi/accountStatus");
  }

  acceptAccount(accountId:string):Observable<boolean>{
    return this.httpClient.get<boolean>("http://localhost:8082/adminapi/acceptAccount/"+accountId);
  }
  
  rejectAccount(accountId:string):Observable<boolean>{
    return this.httpClient.delete<boolean>("http://localhost:8082/adminapi/rejectAccount/"+accountId);
  }

  updatePasswordCount():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:8082/adminapi/updatePasswordCount");
  }

  resetPasswordCount(customerId:String):Observable<boolean>{
    return this.httpClient.get<boolean>("http://localhost:8082/adminapi/resetPasswordCount/"+customerId);
  }

  claimedBankslip():Observable<BankSlip[]>{
    return this.httpClient.get<BankSlip[]>("http://localhost:8082/adminapi/bankslipApproval");
  }
  acceptBankslip(bankSlip:BankSlip):Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:8082/adminapi/acceptBankslip",bankSlip);
  }
  rejectBankslip(bankSlip:BankSlip):Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:8082/adminapi/rejectBankslip",bankSlip);
  }
  bounceBankslip(bankSlip:BankSlip):Observable<boolean>{
    console.log(bankSlip);
    
    return this.httpClient.post<boolean>("http://localhost:8082/adminapi/bouncedBankslip",bankSlip);
  }

}

