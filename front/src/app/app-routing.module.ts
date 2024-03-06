import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationComponent } from './Front/reclamation/reclamation.component';
import { FrontComponent } from './Front/front/front.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SignInDashboardComponent } from './dashboard/sign-in-dashboard/sign-in-dashboard.component';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { CommentComponent } from './dashboard/comment/comment.component';
import {EditCommentComponent} from './dashboard/edit-comment/edit-comment.component'
import { AddCommentComponent } from './dashboard/add-comment/add-comment.component';
import { ForgetPasswordComponent } from './dashboard/forget-password/forget-password.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'sign-in', component: SignInComponent },
  {path: 'register', component:RegisterComponent},
  {path: 'forget', component:ForgetPasswordComponent},
  {path: 'changepassword', component:ChangePasswordComponent},
  {path:'sign-in-dashboard',component:SignInDashboardComponent},
  {path:'dashboard',component:HomeDashComponent},
  {path:'dashboard/useredit/:id',component:EditUserComponent},
  {path:'dashboard/adduser',component:AddUserComponent},
  {path:'dashboard/comment',component:CommentComponent},
  {path:'dashboard/commentedit/:idComment',component:EditCommentComponent},
  {path:'dashboard/commentadd',component:AddCommentComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
