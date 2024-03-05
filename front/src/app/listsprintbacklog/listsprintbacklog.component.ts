import { Component } from '@angular/core';
import { SprintbacklogService } from '../services/sprintbacklog.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listsprintbacklog',
  templateUrl: './listsprintbacklog.component.html',
  styleUrls: ['./listsprintbacklog.component.css']
})
export class ListsprintbacklogComponent {
  sprints: any;
  constructor(private service: SprintbacklogService, private router: Router,private http:HttpClient) { }
  ngOnInit() {
    this.service.listsprint().subscribe(
      response => {
        console.log(response);
        this.sprints = response;
      }
    );
    
  }

  supprimersprint(id: any) {
    console.log(id);
    this.service.supprimersprint(id).subscribe(response => {
    console.log(response);
    })
    
  } 
  
  
  
  
 /* supprimersprint(id: any) {
    if (id) {
        this.service.supprimersprint(id).subscribe(response => {
            console.log(response);
        });
    } else {
        console.error("ID is undefined");
    }
}*/

  modifiersprint(id: any) {
    this.router.navigate(['modifiersprint' + '/' +id]);
  }

}
