import { NgModule } from '@angular/core';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes.component';
import { ArchivelistComponent } from './component/archivelist/archivelist.component';
import { TrashlistComponent } from './component/trashlist/trashlist.component';
import { AuthenticationGuard } from './component/authentication.guard';


const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },

  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard],

    children: [
      { path: '', redirectTo: "/dashboard/getallnotes", pathMatch: 'full' },
      
      { path: "getallnotes", component: GetallnotesComponent },
      { path: 'archive', component: ArchivelistComponent },
      { path: 'trash', component: TrashlistComponent }
]

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }