

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

uploadAadhar(file: any,aadharNumber:number) : Observable<boolean>{

  console.log(file);
  
  // Create form data 
  const formData = new FormData();  
      
  // Store form name as "file" with file data 
  formData.append("file", file, file.name); 

  console.log(formData);
  
  return this.httpClient.put<boolean>("http://localhost:8082/accountapi/updateAadhar/"+aadharNumber,formData);
}


uploadPan(file: any,panNumber:string) : Observable<boolean>{

  console.log(file);
  
  // Create form data 
  const formData = new FormData();  
      
  // Store form name as "file" with file data 
  formData.append("file", file, file.name); 

  console.log(formData);
  
  return this.httpClient.put<boolean>("http://localhost:8082/accountapi/updatePan/"+panNumber,formData);
}

}
