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
import { ModifierreclamationComponent } from './modifierreclamation/modifierreclamation.component';
import { ListdesreclamationComponent } from './listdesreclamation/listdesreclamation.component';
import { AjouterreclamationComponent } from './ajouterreclamation/ajouterreclamation.component';
import { AjoutersprintbacklohComponent } from './ajoutersprintbackloh/ajoutersprintbackloh.component';
import { ListsprintbacklogComponent } from './listsprintbacklog/listsprintbacklog.component';
import { ModifiersprintbacklogComponent } from './modifiersprintbacklog/modifiersprintbacklog.component';


const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'sign-in', component: SignInComponent },
  {path: 'register', component:RegisterComponent},
  {path:'sign-in-dashboard',component:SignInDashboardComponent},
  {path:'dashboard',component:HomeDashComponent},
  {path:'modifierreclamation/:id',component:ModifierreclamationComponent},
  {path:'listreclamation',component:ListdesreclamationComponent},
  {path:'ajoutereclamaton',component:AjouterreclamationComponent},
  {path:'ajoutersprint',component:AjoutersprintbacklohComponent},
  {path:'listsprint',component:ListsprintbacklogComponent},
  {path:'modifiersprint/:id',component:ModifiersprintbacklogComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
