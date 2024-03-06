import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  success="";
  error="";
  content: string = "";

  constructor(private axios: AxiosService,private router: Router,private acroute: ActivatedRoute) {}

  logout(){
    window.localStorage.removeItem("auth_token");
    this.router.navigate(["sign-in-dashboard"])
   }
   onSubmit(): void {
    this.axios.request("POST","/comment/add",{
          "content":this.content
          
      }).then(res=>{
        this.router.navigate(["/dashboard/comment"]);
  
      });

  

}
  }
