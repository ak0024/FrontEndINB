import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  template: '<p>Logout Page</p>'
})
export class LogoutComponent {

  constructor(private router: Router){

  }
  logOut(){
    this.router.navigate([""]);
  }
}
