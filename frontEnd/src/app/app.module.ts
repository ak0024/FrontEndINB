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
import { CustomerforgotpasswordComponent } from './customer/customerforgotpassword/customerforgotpassword/customerforgotpassword.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    AdminloginComponent,
    AdminhomeComponent,
    ClaimBankslipComponent,
    CustomerRegistrationComponent,
    ForgotpasswordComponent,
    CustomerforgotpasswordComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
