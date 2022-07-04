import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Asso} from '../models/asso.model';
import {Observable} from 'rxjs';
import {Evenement} from "../models/evenement.model";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  readonly URI: string = 'http://localhost:3000/Evenement';

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Evenement[]> {
    return this.httpClient.get<Evenement[]>(this.URI);
  }


  create(data: Evenement): Observable<Evenement> {
    return this.httpClient.post<Evenement>(this.URI, data);
  }

  update(data: Evenement, id: number): Observable<Evenement> {
    return this.httpClient.put<Evenement>(this.URI + '/' + data.id, data);
  }
  updateEtat(data: Evenement): Observable<Evenement> {
    data.etat = !data.etat
    return this.httpClient.put<Evenement>(this.URI + '/' + data.id, data);
  }

  delete(data: Evenement): Observable<Evenement> {
    return this.httpClient.delete<Evenement>(this.URI + '/' + data.id)
  }
}
