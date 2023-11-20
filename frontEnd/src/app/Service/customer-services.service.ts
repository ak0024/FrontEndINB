import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Domain/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  

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
}
