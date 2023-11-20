import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerRegistrationComponent } from '../customer/customer-registration/customer-registration.component';
import { Account } from 'src/app/Domain/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationServiceService {

constructor(private httpClient: HttpClient) { }

createCustomerRegistration(account: Account): Observable<String>{
  console.log(account)
  return this.httpClient.post<String>('http://localhost:8082/accountapi/newAccount', account)
}

}
