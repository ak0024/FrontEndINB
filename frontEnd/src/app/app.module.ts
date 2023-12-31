import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ClaimBankslipComponent } from './bankslip/claim-bankslip/claim-bankslip.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { ForgotpasswordComponent } from './admin/forgotpassword/forgotpassword.component';
import { RegistrationWaitingComponent } from './customer/registration-waiting/registration-waiting.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { LogoutComponent } from './customer/logout/logout.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerapprovalComponent } from './admin/customerapproval/customerapproval.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { SendMoneyComponent } from './customer/send-money/send-money.component';
import { AccountapprovalComponent } from './admin/accountapproval/accountapproval.component';
import { BankSlipApprovalComponent } from './admin/bank-slip-approval/bank-slip-approval.component';
import { PasswordReachLimitComponent } from './admin/password-reach-limit/password-reach-limit.component';
import { CustomerbankslipComponent } from './customer/customerbankslip/customerbankslip.component';
import { IssueBankSlipComponent } from './bankslip/issue-bankSlip/issue-bankSlip.component';
import { CustomerTransactionComponent } from './customer/customer-transaction/customer-transaction.component';
import { CustomerforgotpasswordComponent } from './customer/customerforgotpassword/customerforgotpassword/customerforgotpassword.component';
import { AddAccountComponent } from './customer/add-account/add-account.component';



@NgModule({
  declarations: [
    AppComponent,
    //AppRoutingModule,
    CustomerLoginComponent,
    CustomerHomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    ClaimBankslipComponent,
    CustomerRegistrationComponent,
    ForgotpasswordComponent,
    RegistrationWaitingComponent,
    EditProfileComponent,
    LogoutComponent,
    CustomerapprovalComponent,
    CustomerViewComponent,
    CustomerbankslipComponent,
    AccountapprovalComponent,
    BankSlipApprovalComponent,
    PasswordReachLimitComponent,
    CustomerbankslipComponent,
    SendMoneyComponent,
    SendMoneyComponent,
    AccountapprovalComponent,
    BankSlipApprovalComponent,
    PasswordReachLimitComponent,
    CustomerbankslipComponent,
    IssueBankSlipComponent,
    CustomerTransactionComponent,
    CustomerforgotpasswordComponent,
    AddAccountComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
