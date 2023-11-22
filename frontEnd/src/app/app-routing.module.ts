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
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { RegistrationWaitingComponent } from './customer/registration-waiting/registration-waiting.component';
import { LogoutComponent } from './customer/logout/logout.component';
import { CustomerapprovalComponent } from './admin/customerapproval/customerapproval.component';
import { AccountapprovalComponent } from './admin/accountapproval/accountapproval.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerTransactionComponent } from './customer/customer-transaction/customer-transaction.component';
import { PasswordReachLimitComponent } from './admin/password-reach-limit/password-reach-limit.component';
import { BankSlipApprovalComponent } from './admin/bank-slip-approval/bank-slip-approval.component';
import { SendMoneyComponent } from './customer/send-money/send-money.component';

const routes: Routes = [
  {path: "", component: CustomerLoginComponent},
  {path:"customerHome",component:CustomerHomeComponent,children:[
    {path:"",component:CustomerViewComponent},
    {path:"editprofile",component:EditProfileComponent},
    {path:"transactions",component:CustomerTransactionComponent},
    {path:"send-money/:accountId", component:SendMoneyComponent}
  ]},
  {path:"editprofile", component: EditProfileComponent},  
  {path:"claimbankslip",component:ClaimBankslipComponent},
  {path:"adminlogin", component:AdminloginComponent},
  {path:"adminhome", component:AdminhomeComponent,children:[
    {path:"",component:CustomerapprovalComponent},
    {path:"accountApprovel",component:AccountapprovalComponent},
    {path:"passwordReachLimit",component:PasswordReachLimitComponent},
    {path:"bankSlipApproval",component:BankSlipApprovalComponent}

  ]},
  {path:"issueBankSlip",component:IssueBankSlipComponent},
  {path:"customerRegistration",component:CustomerRegistrationComponent},
  {path:"forgotAdminPassword", component:ForgotpasswordComponent},
  {path:"registrationWaiting", component:RegistrationWaitingComponent},
  {path:"logout", component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
  