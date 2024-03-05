import { Component } from '@angular/core';
import { SprintbacklogService } from '../services/sprintbacklog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutersprintbackloh',
  templateUrl: './ajoutersprintbackloh.component.html',
  styleUrls: ['./ajoutersprintbackloh.component.css']
})
export class AjoutersprintbacklohComponent {

  constructor(private service: SprintbacklogService, private router: Router) { }

  persistesprint(reclamation:any)
  {
    this.service.ajoutersprint(reclamation).subscribe(data => {this.router.navigate(["dashboard"])});
  }
}
