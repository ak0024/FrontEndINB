import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<<< HEAD:frontEnd/src/app/services/adminlogin.service.ts
import { Admin } from '../domain/admin';
========
import { Admin } from '../admin/adminlogin/admin';
>>>>>>>> 96b246f8b08fc33e268d844e328d3371b830edf9:frontEnd/src/app/Service/adminlogin.service.ts
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
