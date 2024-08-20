import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Project } from '../model/proyect';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  URL = environment.URL + 'proyect';

  constructor(private httpClient : HttpClient) { }

  public list(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.URL);
  }

  public detail(id: number): Observable<Project>{
    return this.httpClient.get<Project>(this.URL + `/detail/${id}`);
  }

  public save(proyecto: Project): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', proyecto);
  }

  public update(id: number, proyecto: Project): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }

}