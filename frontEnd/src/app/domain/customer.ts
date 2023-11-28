export class Customer{
    firstName: string='';
    lastName: string='';
    userName: string='';
    password: string='';
    addressLine1: string='';
    addressLine2: string='';
    addressLine3: string='';
    city: string='';
    state: string='';
    zip: number | undefined;
    phone: number| undefined;
    cell: number| undefined;
    email: string='';
    customerId: string='';
    customerStatus: string='';
    passwordReachLimit: number=0;
    confirmPassword:String="";
    message:String="";
    aadharFile?: File
    aadharNumber: number | undefined;
    panCardFile?: File
    panCardNumber: string='';
    whyMessage: string='';
    


}