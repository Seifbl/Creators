import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent {
  success="";
  error="";
  content: string = "";

constructor(private axios: AxiosService,private router: Router,private acroute: ActivatedRoute) {}

  logout(){
    window.localStorage.removeItem("auth_token");
    this.router.navigate(["sign-in-dashboard"])
  }
    onSubmit(): void {
      this.acroute.params.subscribe((param : Params) => {
        this.axios.request("POST","/comment/"+param['idComment'],{
              "content":this.content
              
          }).then(res=>{
            this.router.navigate(["dashboard/comment"]);
      
          }).catch(err=>{
            this.error="invalid comment";
            
          });
    });
      
    
    }
  }
  
