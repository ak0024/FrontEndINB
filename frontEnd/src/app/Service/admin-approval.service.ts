import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Domain/Customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApprovalService {

  constructor(private httpClient: HttpClient) { }

  customerStatus():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:8082/adminapi/customerStatus");
  }

  acceptCustomer(customerId:string):Observable<boolean>{
    return this.httpClient.get<boolean>("http://localhost:8082/adminapi/acceptCustomer/"+customerId);
  }
  
  rejectCustomer(customerId:string):Observable<boolean>{
    return this.httpClient.delete<boolean>("http://localhost:8082/adminapi/rejectCustomer/"+customerId);
  }
}
