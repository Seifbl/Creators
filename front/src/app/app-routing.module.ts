import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Front/home/home.component';
import { ReclamationComponent } from './Front/reclamation/reclamation.component';
import { HeaderComponent } from './Front/header/header.component';
import { FrontComponent } from './Front/front/front.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SignInDashboardComponent } from './dashboard/sign-in-dashboard/sign-in-dashboard.component';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { CommentComponent } from './dashboard/comment/comment.component';


const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'sign-in', component: SignInComponent },
  {path: 'register', component:RegisterComponent},
  {path:'sign-in-dashboard',component:SignInDashboardComponent},
  {path:'dashboard',component:HomeDashComponent},
  {path:'dashboard/useredit/:id',component:EditUserComponent},
  {path:'dashboard/comment',component:CommentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
