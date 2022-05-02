import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';









import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TakenoteComponent } from './component/takenote/takenote.component';
import { DisplaycardsComponent } from './component/displaycards/displaycards.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes.component';
import { IconsComponent } from './component/icons/icons.component';
import { UpdatenotesComponent } from './component/updatenotes/updatenotes.component';
import { ArchivelistComponent } from './component/archivelist/archivelist.component';
import { TrashlistComponent } from './component/trashlist/trashlist.component';
import { AuthGuardService } from './services/auth/auth-guard.service';






@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    DisplaycardsComponent,
    GetallnotesComponent,
    IconsComponent,
    UpdatenotesComponent,
    TrashlistComponent,
    ArchivelistComponent
    
    
    
  
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,FormsModule, ReactiveFormsModule,FlexLayoutModule,MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatMenuModule,MatDialogModule
   
   
  ],
  providers: [ AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


