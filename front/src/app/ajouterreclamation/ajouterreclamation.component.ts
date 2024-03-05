import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from '../services/reclamation/reclamation.service';

@Component({
  selector: 'app-ajouterreclamation',
  templateUrl: './ajouterreclamation.component.html',
  styleUrls: ['./ajouterreclamation.component.css']
})
export class AjouterreclamationComponent {
  constructor(private service: ReclamationService, private router: Router) { }

  persistreclamation(reclamation:any)
  {
    this.service.ajouterreclamation(reclamation).subscribe(data => {this.router.navigate(["dashboard"])});
  }

}
