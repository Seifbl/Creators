import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  constructor(private service: ReclamationService, private router: Router) { }
  persistreclamation(reclamation:any)
  {
    this.service.ajouterreclamation(reclamation).subscribe(data => {this.router.navigate(["dashboard"])});
  }

}
