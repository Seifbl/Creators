import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprintbacklog } from '../model/sprintbacklog';

@Injectable({
  providedIn: 'root'
})
export class SprintbacklogService {

  private ajouterurl ='http://localhost:8085/rania/addSprintBacklog';
  private listurl ='http://localhost:8085/rania/retrieveAllSprintBacklogs';
  private modifierurl = 'http://localhost:8085/rania/update_SprintBacklog';
  constructor(private http: HttpClient) { }
  
  ajoutersprint(Sprintbacklog: any) {
     return this.http.post(this.ajouterurl, Sprintbacklog);
   }
   listsprint() {
    
   return this.http.get(this.listurl);
  }
  supprimersprint(id: any) {
    return this.http.delete(`http://localhost:8085/rania/removeSprintBacklog/${id}`)
   }
   
   modifiersprint(id:number,sprintbakclog: Sprintbacklog) {
    const url = `${this.modifierurl}/${id}`;
    return this.http.put<Sprintbacklog>(url, sprintbakclog);

   }
 
   getsprint(id: any) {
     return this.http.get('http://localhost:8085/rania/get_SprintBacklog/' + id)
   }
}
