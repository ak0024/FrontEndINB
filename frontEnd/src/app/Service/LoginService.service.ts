import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<<< HEAD:frontEnd/src/app/services/LoginService.service.ts
import { CustomerLogin } from '../domain/CustomerLogin';
========
import { CustomerLogin } from '../Domain/CustomerLogin';
>>>>>>>> 96b246f8b08fc33e268d844e328d3371b830edf9:frontEnd/src/app/Service/LoginService.service.ts
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
