import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation/reclamation.service';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent {
  reclamations: any;
  constructor(private service: ReclamationService, private router: Router) { }
  ngOnInit() {
    this.service.listreclamation().subscribe(
      response => {
        this.reclamations = response;
      }
    );
  }
  showReclamation: boolean = false;
  reclamationClass: string = 'show-reclamation'; 
  toggleReclamation() {
    this.showReclamation = !this.showReclamation;
  }
  showsprint: boolean = false;
  sprintclass: string = 'show-sprint'; 
  togglesprint() {
    this.showsprint = !this.showsprint;
  }
  supprimerreclamation(id: any) {
    this.service.supprimerreclamation(id).subscribe(response => {
      console.log(response);
    })
    
  }
  modifierreclamation(id: any) {
    this.router.navigate(['modifierreclamation' + '/' +id]);
  }
 
}
