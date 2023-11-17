import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<<< HEAD:frontEnd/src/app/services/bankslip-service.service.ts
import { BankSlip } from '../domain/BankSlip';
========
import { BankSlip } from '../Domain/BankSlip';
>>>>>>>> 96b246f8b08fc33e268d844e328d3371b830edf9:frontEnd/src/app/Service/bankslip-service.service.ts
import { Observable } from 'rxjs';
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
