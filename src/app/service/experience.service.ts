import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../model/experience';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  URL = environment.URL + 'experience';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.URL);
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.URL + `/detail/${id}`);
  } 

  public save(experiencia: Experience): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', experiencia);
  }

  public update(id: number, experiencia: Experience): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
  
}
