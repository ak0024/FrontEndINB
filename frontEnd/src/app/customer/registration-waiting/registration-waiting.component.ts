import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-waiting',
  templateUrl: './registration-waiting.component.html',
  styleUrls: ['./registration-waiting.component.css']
})
export class RegistrationWaitingComponent {
constructor(private router:Router){

}

gotohome(){
  this.router.navigate(['']);
}

  
}
