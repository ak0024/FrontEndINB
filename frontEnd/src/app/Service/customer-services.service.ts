import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  

  constructor(private httpClient : HttpClient) {}

  // getAllCustomersList() : Observable<Customer[]>{
  //   return this.httpClient.get<Customer>("http://localhost:8082/customerapi/customers");
  // }

}
