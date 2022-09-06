import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Asso} from '../models/asso.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssoService {

  readonly URI: string = 'http://localhost:3000/assos';

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Asso[]> {
    return this.httpClient.get<Asso[]>(this.URI);
  }

  getAssoById(id: any): Observable<Asso>{
    return this.httpClient.get<Asso>(this.URI + '/' + id);
  }

  create(data: Asso): Observable<Asso> {
    return this.httpClient.post<Asso>(this.URI, data);
  }

  update(data: Asso, id: number): Observable<Asso> {
    return this.httpClient.put<Asso>(this.URI + '/' + data.id, data);
  }
  updateEtat(data: Asso): Observable<Asso> {
    data.etat = !data.etat
    return this.httpClient.put<Asso>(this.URI + '/' + data.id, data);
  }

  delete(id: any): Observable<Asso> {
    return this.httpClient.delete<Asso>(this.URI + '/' + id);
  }

  deleteAsso(data: Asso): Observable<Asso> {
    return this.httpClient.delete<Asso>(this.URI + '/' + data.id);
  }
}
