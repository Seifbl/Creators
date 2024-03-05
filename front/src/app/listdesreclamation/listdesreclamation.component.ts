import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation/reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdesreclamation',
  templateUrl: './listdesreclamation.component.html',
  styleUrls: ['./listdesreclamation.component.css']
})
export class ListdesreclamationComponent {
  reclamations: any;
  constructor(private service: ReclamationService, private router: Router) { }
  ngOnInit() {
    this.service.listreclamation().subscribe(
      response => {
        this.reclamations = response;
      }
    );
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
