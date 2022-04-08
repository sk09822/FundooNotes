import { NgModule } from '@angular/core';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 
  
    {path:'registration',component:RegistrationComponent},
      {path:'login',component:LoginComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
    
    {path:'reset-password',component:ResetPasswordComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],

})
export class AppRoutingModule { }