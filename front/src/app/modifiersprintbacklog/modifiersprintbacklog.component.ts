import { Component } from '@angular/core';
import { SprintbacklogService } from '../services/sprintbacklog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sprintbacklog } from '../model/sprintbacklog';

@Component({
  selector: 'app-modifiersprintbacklog',
  templateUrl: './modifiersprintbacklog.component.html',
  styleUrls: ['./modifiersprintbacklog.component.css']
})
export class ModifiersprintbacklogComponent {
  id:any;
  nomTache:any;
  description:any;
  priorite:any;
  estimation:any;
  dateDebut:any;
  dateFin:any;
  elementsLiees:any;
  constructor(private service: SprintbacklogService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        //alert(this.id);

    });

    this.service.getsprint(this.id).subscribe(
      (sprint:any)=>{
                      this.nomTache=sprint.nomTache;
                      this.description = sprint.description;
                      this.priorite = sprint.priorite;
                      this.estimation=sprint.estimation;
                      this.dateDebut = sprint.dateDebut;
                      this.dateFin = sprint.dateFin;
                      this.elementsLiees = sprint.elementsLiees;
                      console.log(sprint);
                    }
    );
  }


  
  updatesprintbacklog(): void {
    
    const updatesprint: Sprintbacklog = {
        id:this.id,
        nomTache: this.nomTache,
        description: this.description,
        priorite: this.priorite,
        estimation: this.estimation,
        dateDebut:this.dateDebut,
        dateFin:this.dateFin,
        elementsLiees:this.elementsLiees,
    };
    this.service.modifiersprint(this.id, updatesprint)
      .subscribe(updated => {
        // Faites quelque chose avec la réclamation mise à jour
        console.log('sprint mise à jour:', updated);
        this.router.navigate(['dashboard']);
      });
}

}
