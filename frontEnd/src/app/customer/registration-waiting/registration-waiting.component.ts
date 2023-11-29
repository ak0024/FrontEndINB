import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-waiting',
  templateUrl: './registration-waiting.component.html',
  styleUrls: ['./registration-waiting.component.css']
})
export class RegistrationWaitingComponent {
  word:any
constructor(private router:Router){
  this.word=JSON.parse(localStorage.getItem("SuccessDetails")||'{}')
  console.log(this.word)
}

gotohome(){
  localStorage.setItem("SuccessDetails","")
  this.router.navigate(['']);
  
}

  
}
