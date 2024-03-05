import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../model/reclamation';

@Component({
  selector: 'app-modifierreclamation',
  templateUrl: './modifierreclamation.component.html',
  styleUrls: ['./modifierreclamation.component.css']
})
export class ModifierreclamationComponent {
  id:any;
  name:any;
  descriptionReclamation:any;
  dateSoumission:any;
  constructor(private service: ReclamationService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        //alert(this.id);

    });

    this.service.getReclamation(this.id).subscribe(
      (reclamation:any)=>{
                      this.name=reclamation.name;
                      this.descriptionReclamation = reclamation.descriptionReclamation;
                      this.dateSoumission = reclamation.dateSoumission;
                      console.log(reclamation);
                    }
    );
  }


  
  modifierReclamation(): void {
    
    const updatedReclamation: Reclamation = {
        name: this.name,
        descriptionReclamation: this.descriptionReclamation,
        dateSoumission: this.dateSoumission
    };
    this.service.modifierreclamation(this.id, updatedReclamation)
      .subscribe(updated => {
        // Faites quelque chose avec la réclamation mise à jour
        console.log('Réclamation mise à jour:', updated);
        this.router.navigate(['dashboard']);
      });
}


}
