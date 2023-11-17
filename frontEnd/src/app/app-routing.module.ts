import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ClaimBankslipComponent } from './bankslip/claim-bankslip/claim-bankslip.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { IssueBankSlipComponent } from './bankslip/issue-bankSlip/issue-bankSlip.component';
import { ForgotpasswordComponent } from './admin/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path: "", component: CustomerLoginComponent},
  {path:"customerHome",component:CustomerHomeComponent},
  {path:"claimbankslip",component:ClaimBankslipComponent},
  {path:"adminlogin", component:AdminloginComponent},
  {path:"adminhome", component:AdminhomeComponent},
  {path:"issueBankSlip",component:IssueBankSlipComponent},
  {path:"customerRegistration",component:CustomerRegistrationComponent},
  {path:"forgotAdminPassword", component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  