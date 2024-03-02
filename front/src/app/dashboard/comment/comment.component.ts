import { Component } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {
  auth:any;
  
  success="";
  error="";
  comments:any;
  constructor(private router: Router,private axios: AxiosService,) { }
  ngOnInit(){
  this.auth = window.localStorage.getItem("auth_token");
   this.axios.request("GET","/comment",{}).then(res=>{
    this.comments = res.data;
    console.log(this.comments);
});
this.auth==null?this.router.navigate(["sign-in-dashboard"]):null;
  }
  logout(){
    window.localStorage.removeItem("auth_token");
    this.router.navigate(["sign-in-dashboard"])
   }
   delete(idComment : any){
    this.axios.request("DELETE","/comment/"+idComment,{}).then(res=>{
      
  }).then(res=>{
    this.success="Delete Successefully.";
    this.axios.request("GET","/comment",{}).then(res=>{
      this.comments = res.data;
  });
  }).catch(err=>{
    this.error=err;
  });
   }
  }

