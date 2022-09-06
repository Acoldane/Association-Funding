import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URI: string = 'http://localhost:3000/User';

  constructor(private httpClient: HttpClient) { }

  create(data: User): Observable<User> {
    return this.httpClient.post<User>(this.URI, data);
  }

  connect(data: User): Observable<User> {
    return this.httpClient.post<User>(this.URI, data);
  }

  createAssoAccount(data: User): Observable<User> {
    return this.httpClient.post<User>(this.URI + "?email=" + data.email, data);
  }

}
