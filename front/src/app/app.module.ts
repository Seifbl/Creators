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
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeDashComponent } from './dashboard/home-dash/home-dash.component';
import { ModifierreclamationComponent } from './modifierreclamation/modifierreclamation.component';
import { ListdesreclamationComponent } from './listdesreclamation/listdesreclamation.component';
import { AjouterreclamationComponent } from './ajouterreclamation/ajouterreclamation.component';
import { ListsprintbacklogComponent } from './listsprintbacklog/listsprintbacklog.component';
import { ModifiersprintbacklogComponent } from './modifiersprintbacklog/modifiersprintbacklog.component';
import { AjoutersprintbacklohComponent } from './ajoutersprintbackloh/ajoutersprintbackloh.component';


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
    ModifierreclamationComponent,
    ListdesreclamationComponent,
    AjouterreclamationComponent,
    ListsprintbacklogComponent,
    ModifiersprintbacklogComponent,
    AjoutersprintbacklohComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
