import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  URL = environment.URL + 'proyectos';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `/detalle/${id}`);
  }

  public save(educacion: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/crear', educacion);
  }

  public update(id: number, educacion: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/actualizar/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/${id}`);
  }

}
