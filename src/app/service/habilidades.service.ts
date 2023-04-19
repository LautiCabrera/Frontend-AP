import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Habilidades } from '../model/habilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HabilidadesService {

  URL = environment.URL + 'habilidades';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.URL + '/lista'); 
  }

  public detail(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.URL + `/detalle/${id}`);
  }

  public save(habilidad: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/crear', habilidad);
  }

  public update(id: number, habilidad: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/actualizar/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/borrar/${id}`);
  }
  
}
