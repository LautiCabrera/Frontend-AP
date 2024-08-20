import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class PersonService { 
  
  constructor(private httpClient: HttpClient) { }

  URL = environment.URL + 'person';

  public list(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.URL);
  }

  public detail(id: number): Observable<Person>{
    return this.httpClient.get<Person>(this.URL + `/detail/${id}`);
  }

  public update(id: number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, person);
  }

}
