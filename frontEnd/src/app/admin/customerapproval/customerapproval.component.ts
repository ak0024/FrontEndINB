import { Component } from '@angular/core';
import { Admin } from 'src/app/Domain/admin';

@Component({
  selector: 'app-customerapproval',
  templateUrl: './customerapproval.component.html',
  styleUrls: ['./customerapproval.component.css']
})
export class CustomerapprovalComponent {
admin:Admin= new Admin();
}
