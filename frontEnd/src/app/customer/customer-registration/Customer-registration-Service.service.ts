import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { Account } from 'src/app/bankslip/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationServiceService {

constructor(private httpClient: HttpClient) { }

createCustomerRegistration(account: Account): Observable<Account>{
  console.log(account)
  return this.httpClient.post<Account>('http://localhost:8082/accountapi/accounts/account', account)
}

}
