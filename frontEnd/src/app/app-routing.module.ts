import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';

const routes: Routes = [
  {path: "", component: CustomerLoginComponent},
  {path:"customerHome",component:CustomerHomeComponent},
  {path:"adminlogin", component:AdminloginComponent},
  {path:"adminhome", component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  