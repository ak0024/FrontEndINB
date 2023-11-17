import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerLogin } from '../Domain/CustomerLogin';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class LoginServiceService {
  constructor(private httpClient: HttpClient) {}

  validateLogin(customerLogin: CustomerLogin): Observable<CustomerLogin> {
    console.log(customerLogin)
    return this.httpClient.post<CustomerLogin>('http://localhost:8082/customerapi/customerLogin',customerLogin);
  }
}
