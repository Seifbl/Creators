import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  success="";
  error="";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";
  
  constructor(private axios: AxiosService,private router: Router,private acroute: ActivatedRoute) {}

  logout(){
    window.localStorage.removeItem("auth_token");
    this.router.navigate(["sign-in-dashboard"])
   }
   onSubmit(): void {
      this.axios.request("POST","/register",{
            "firstName":this.firstName,
            "lastName":this.lastName,
            "login":this.login,
            "password":this.password
        }).then(res=>{
          this.router.navigate(["dashboard"]);
    
        });

    
  
  }
}
