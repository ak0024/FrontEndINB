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
}
