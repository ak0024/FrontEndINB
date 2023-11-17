import { Component } from '@angular/core';
import { Admin } from '../../domain/admin';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  admin:Admin= new Admin();

}
