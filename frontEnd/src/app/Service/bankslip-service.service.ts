import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Observable } from 'rxjs';
import { BankSlip } from '../Domain/BankSlip';
@Injectable({
  providedIn: 'root'
})
export class BankslipServiceService {

  constructor(private httpClient:HttpClient) { }
  
  claimbankslip(): Observable<BankSlip[]>{
    return this.httpClient.get<BankSlip[]>("http://localhost:8081/bankslipapi/bankslips")
  }
  updateBankslip(bankSlip:BankSlip):Observable<BankSlip>{
    return this.httpClient.put<BankSlip>("http://localhost:8081/bankslipapi/bankslips/bankslip",bankSlip)
  }

}
