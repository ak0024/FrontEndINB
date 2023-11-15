import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ClaimBankslipComponent } from './bankslip/claim-bankslip/claim-bankslip.component';

const routes: Routes = [
  {path: "", component: CustomerLoginComponent},
  {path:"customerHome",component:CustomerHomeComponent},
  {path:"claimbankslip",component:ClaimBankslipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  