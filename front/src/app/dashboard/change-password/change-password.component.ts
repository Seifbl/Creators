import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private axios: AxiosService,private router: Router,private activatedRoute: ActivatedRoute) {}

 
  password: string = "";
  erreur=""; 
  success="";
  token:any;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.token = params['token'];
    });
  }
  onSubmit(): void {
      
     this.axios.request("POST","/reset_password?token="+this.token+"&password="+this.password,{}).then(res=>{      
      this.success=res.data;
      this.router.navigate(["sign-in-dashboard"])

    }).catch(err=>{
      this.erreur="Password Cannot be changed";
      
    });
    
  }
}
