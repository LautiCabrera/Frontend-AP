import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  URL = environment.URL + 'skill';
  
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL); 
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `/detail/${id}`);
  }

  public save(habilidad: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', habilidad);
  }

  public update(id: number, habilidad: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
  
}