import { Component } from '@angular/core';
import { Admin } from 'src/app/Domain/admin';

@Component({
  selector: 'app-accountapproval',
  templateUrl: './accountapproval.component.html',
  styleUrls: ['./accountapproval.component.css']
})
export class AccountapprovalComponent {
admin:Admin= new Admin();

constructor(){

}


}
