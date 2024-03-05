import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reclamation } from 'src/app/model/reclamation';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private ajouterurl ='http://localhost:8085/rania/addReclamation';
  private listurl ='http://localhost:8085/rania/retrieveAllReclamations';
  private modifierurl = 'http://localhost:8085/rania/update_reclamation';
  
  constructor(private http: HttpClient) { }
  
  ajouterreclamation(reclamation: any) {
     return this.http.post(this.ajouterurl, reclamation);
   }
   listreclamation() {
    
   return this.http.get(this.listurl);
  }
  supprimerreclamation(idreclamation: any) {
    return this.http.delete(`http://localhost:8085/rania/removeReclamation/${idreclamation}`)
   }
   modifierreclamation(id:number,reclamation: Reclamation) {
    const url = `${this.modifierurl}/${id}`;
    return this.http.put<Reclamation>(url, reclamation);

   }
 
   getReclamation(id: any) {
     return this.http.get('http://localhost:8085/rania/get_reclamation/' + id)
   }

}
