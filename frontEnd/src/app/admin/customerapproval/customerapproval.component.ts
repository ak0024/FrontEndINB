import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Domain/Customer';
import { Admin } from 'src/app/Domain/admin';

@Component({
  selector: 'app-customerapproval',
  templateUrl: './customerapproval.component.html',
  styleUrls: ['./customerapproval.component.css']
})
export class CustomerapprovalComponent implements OnInit {
admin:Admin= new Admin();
customer:Customer=new Customer();
ngOnInit(){

}

onReload(){
  
}

}
