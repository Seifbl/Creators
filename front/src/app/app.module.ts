import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Front/home/home.component';
import { ReclamationComponent } from './Front/reclamation/reclamation.component';
import { HeaderComponent } from './Front/header/header.component';
import { FrontComponent } from './Front/front/front.component';
import { BackComponent } from './Back/back/back.component';
import { SidebarComponent } from './Back/sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SignInDashboardComponent } from './dashboard/sign-in-dashboard/sign-in-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { CommentComponent } from './dashboard/comment/comment.component';
import { EditCommentComponent } from './dashboard/edit-comment/edit-comment.component';
import { AddCommentComponent } from './dashboard/add-comment/add-comment.component';
import { ForgetPasswordComponent } from './dashboard/forget-password/forget-password.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReclamationComponent,
    HeaderComponent,
    FrontComponent,
    BackComponent,
    SidebarComponent,
    SignInComponent,
    RegisterComponent,
    SignInDashboardComponent,
    HomeDashComponent,
    EditUserComponent,
    AddUserComponent,
    CommentComponent,
    EditCommentComponent,
    AddCommentComponent,
    ForgetPasswordComponent,
     ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
