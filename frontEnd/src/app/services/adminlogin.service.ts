import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../domain/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private httpClient: HttpClient) { }

  validateAdminLogin(admin: Admin):Observable<Admin>{
    console.log(admin);
    return this.httpClient.post<Admin>("http://localhost:8082/adminapi/adminlogin",admin);
   }
forgotPassword(admin:Admin):Observable<Admin>{
  console.log(admin);
  return this.httpClient.put<Admin>("http://localhost:8082/adminapi/admins/admin",admin);
}
   
}
