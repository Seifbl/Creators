import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  success="";
  error="";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  constructor(private axios: AxiosService,private router: Router,private acroute: ActivatedRoute) {}

  logout(){
    window.localStorage.removeItem("auth_token");
    this.router.navigate(["sign-in-dashboard"])
   }
   onSubmit(): void {
    this.acroute.params.subscribe((param : Params) => {
      this.axios.request("POST","/user/"+param['id'],{
            "firstName":this.firstName,
            "lastName":this.lastName,
            "login":this.login
        }).then(res=>{
          this.router.navigate(["dashboard"]);
    
        }).catch(err=>{
          this.error="invalid login or password";
          
        });
  });
    
  
  }
}
