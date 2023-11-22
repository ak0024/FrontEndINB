import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Domain/Customer';
import { Account } from '../Domain/account';
import { Transaction } from '../Domain/Transaction';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {
  next(updateCustomer: () => void) {
    throw new Error('Method not implemented.');
  }

  

  constructor(private httpClient : HttpClient) {}

  // getAllCustomersList() : Observable<Customer[]>{
  //   return this.httpClient.get<Customer>("http://localhost:8082/customerapi/customers");
  // }

  getCustomerbyCustomerId(customerId: number): Observable<Customer>{
    return this.httpClient.get<Customer>("http://localhost:8082/customerapi/customers/" +customerId);

  }

  updateCustomer(customer: Customer): Observable<Customer>{
    return this.httpClient.put<Customer>("http://localhost:8082/customerapi/customers/customer", customer);
  }

  getAccountByCustomerId(customerId:string):Observable<Account[]>{
    return this.httpClient.get<Account[]>("http://localhost:8082/accountapi/accounts/customer/"+customerId);
  
  }
  sendMoney(transaction:Transaction):Observable<string[]>{
    return this.httpClient.post<string[]>("http://localhost:8082/transactionapi/sendMoney",transaction);
  }
}
