import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private axios: AxiosService,private router: Router) {}

 

  login: string = "";
  erreur=""; 
  success="";

  onSubmit(): void {
  
     this.axios.request("POST","/forgot_password",this.login).then(res=>{
      console.log(res);
      
      this.success=res.data;

    }).catch(err=>{
      this.erreur="invalid email";
      
    });
    
    
  }
}
