import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../Domain/Transaction';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) {}
    transaction(accountId:string):Observable<Transaction[]> {
      return this.httpClient.get<Transaction[]>("http://localhost:8082/transactionapi/getTransaction/"+accountId)
    }
  }

