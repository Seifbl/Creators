import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-sign-in-dashboard',
  templateUrl: './sign-in-dashboard.component.html',
  styleUrls: ['./sign-in-dashboard.component.css']
})
export class SignInDashboardComponent {
  constructor(private axios: AxiosService,private router: Router) {}

 
  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";
  erreur="";
  token = "";
  onSwitch(): void {
		this.active=="login" ? this.active = "register":this.active="login";
    
	}

  onSubmit(): void {
    if(this.active=="login"){
  
     this.axios.request("POST","/login",{
        "login":this.login,
        "password":this.password
    }).then(res=>{
      window.localStorage.setItem("auth_token" ,res.data.token);
      this.router.navigate(["dashboard"]);

    }).catch(err=>{
      this.erreur="invalid login or password";
      
    });
    
    }else{
      let  result = this.axios.request("POST","/register",{
        "firstName":this.firstName,
        "lastName":this.lastName,
        "login":this.login,
        "password":this.password
    }).then(res=>{
      this.active=="login";
      this.router.navigate(["sign-in-dashboard"]);

    });
    }
  }

  
}
