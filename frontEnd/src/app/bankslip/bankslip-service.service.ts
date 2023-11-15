import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BankSlip } from './BankSlip';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankslipServiceService {

  constructor(private httpClient:HttpClient) { }
  
  claimbankslip(): Observable<BankSlip[]>{
    return this.httpClient.get<BankSlip[]>("http://localhost:8081/bankslipapi/bankslips")
  }

}
