import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Observable } from 'rxjs';
import { BankSlip } from '../Domain/BankSlip';

@Injectable({
  providedIn: 'root'
})
export class BankslipServiceService {

  constructor(private httpClient:HttpClient) { }
  
  claimbankslip(accountid:string): Observable<BankSlip[]>{
    return this.httpClient.get<BankSlip[]>("http://localhost:8082/bankslipapi/bankslipaccount/"+ accountid)
  }
  updateBankslip(bankSlip:BankSlip):Observable<BankSlip>{
    return this.httpClient.put<BankSlip>("http://localhost:8082/bankslipapi/bankslips/bankslip",bankSlip)
  }

}
