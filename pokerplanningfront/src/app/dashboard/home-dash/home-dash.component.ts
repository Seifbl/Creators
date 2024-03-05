import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})


export class HomeDashComponent implements OnInit {
  auth:any;
  users:any;
  success="";
  error="";

  constructor(private router: Router,private axios: AxiosService,) { }
  ngOnInit(){
  this.auth = window.localStorage.getItem("auth_token");
   this.axios.request("GET","/user",{}).then(res=>{
    this.users = res.data;
    console.log(this.users);
});
  this.auth==null?this.router.navigate(["sign-in-dashboard"]):null;
 }
 logout(){
  window.localStorage.removeItem("auth_token");
  this.router.navigate(["sign-in-dashboard"])
 }
 delete(id : any){
  this.axios.request("DELETE","/user/"+id,{}).then(res=>{
    
}).then(res=>{
  this.success="Delete Successefully.";
  this.axios.request("GET","/user",{}).then(res=>{
    this.users = res.data;
});
}).catch(err=>{
  this.error=err;
});
 }
}
